import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface EnquiryFormModalProps {
  onClose: () => void;
  title: string;
}

const EnquiryFormModal = ({ onClose, title }: EnquiryFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "", message: "" };

    if (!formData.Name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    }

    if (!formData.Email.trim()) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.Phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.Phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    if (!formData.Message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url =
      "https://script.google.com/macros/s/AKfycbzfD5ifoutIgboynAYIuNoYzJGWKWtK3IeveyP5blZtVBzRE13nVMLJ6QLgLsQl6cKO/exec";

    if (!validateForm()) {
      toast({
        title: "Form Error",
        description: "Please fill out all fields correctly.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams({
        Name: formData.Name,
        Email: formData.Email,
        Phone: formData.Phone,
        Message: formData.Message,
      }).toString();

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
        redirect: "follow",
        mode: "cors",
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        toast({
          title: "Sent Successfully!",
          description:
            "Thank you for reaching out. We'll contact you within 24 hours.",
          className: "bg-[#1A3C34] text-white border-[#D4A017]",
          duration: 5000,
        });
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Message: "",
        });
        onClose();
      } else {
        throw new Error(result.message || `Server error: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="bg-card border-none shadow-lg w-full max-w-md relative">
        <Button
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-6">
            {title}
          </h3>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="Name"
                value={formData.Name}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="Email"
                type="email"
                value={formData.Email}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="Phone"
                type="tel"
                value={formData.Phone}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="Message"
                value={formData.Message}
                onChange={handleInputChange}
                rows={4}
                className="mt-1"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-[#D4A017] hover:bg-[#B8901A] text-white font-semibold py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnquiryFormModal;