import { useState } from "react";
import axios from "axios";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      const response = await axios.post(
        "http://localhost:5000/api/leads",
        formData
      );
      toast({
        title: "Enquiry Submitted!",
        description:
          "Thank you for reaching out. We'll contact you within 24 hours.",
        className: "bg-[#1A3C34] text-white border-[#D4A017]",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details:
        "Shalimar One World, Aliganj Extension, Lucknow, Uttar Pradesh 226024",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@shalimar.com",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Sat: 9:00 AM - 7:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#1A3C34] to-[#2A4C44] flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl opacity-90 max-w-2xl animate-fade-in-up">
            Get in touch with our team to schedule a site visit or learn more
            about Shalimar One World
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border-none">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-[#1A3C34]">
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you soon.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full transition-all duration-300 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full transition-all duration-300 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full transition-all duration-300 ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      placeholder="Enter your 10-digit phone number"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full transition-all duration-300 ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      placeholder="Tell us about your requirements..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D4A017] hover:bg-[#B8901A] text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Enquiry"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1A3C34] mb-6 animate-fade-in">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed animate-fade-in-up">
                  Ready to experience luxury living at Shalimar One World? Our
                  team is here to help you find your perfect home. Reach out to
                  us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#1A3C34] text-white rounded-lg flex items-center justify-center">
                            <info.icon className="w-6 h-6" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1A3C34] mb-1">
                            {info.title}
                          </h3>
                          <p className="text-gray-600">{info.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive Map Coming Soon</p>
                      <p className="text-sm">Shalimar One World Location</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#F5E6CC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] mb-6 animate-fade-in">
            Schedule Your Site Visit Today
          </h2>
          <p className="text-xl text-gray-700 mb-8 animate-fade-in-up">
            Experience the luxury and elegance of Shalimar One World in person.
            Book your personalized tour now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#D4A017] hover:bg-[#B8901A] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Book Site Visit
            </Button>
            <Button
              variant="outline"
              className="border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
