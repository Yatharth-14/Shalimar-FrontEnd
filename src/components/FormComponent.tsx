import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ContactSection from "@/components/ContactSection";

interface FormComponentProps {
  onFormSubmit: () => void;
}

const FormComponent = ({ onFormSubmit }: FormComponentProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: ""
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

    const url = "https://script.google.com/macros/s/AKfycbzfD5ifoutIgboynAYIuNoYzJGWKWtK3IeveyP5blZtVBzRE13nVMLJ6QLgLsQl6cKO/exec";

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
          description: "Thank you for reaching out. We'll contact you within 24 hours.",
          className: "bg-[#1A3C34] text-white border-[#D4A017]",
          duration: 5000,
        });
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Message: "",
        });
        onFormSubmit(); // Notify parent of successful submission
      } else {
        throw new Error(result.message || `Server error: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again.";
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactSection
      formData={formData}
      errors={errors}
      isSubmitting={isSubmitting}
      handleInputChange={handleInputChange}
      handleFormSubmit={handleFormSubmit}
    />
  );
};

export default FormComponent;