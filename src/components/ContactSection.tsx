import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import ContactForm from "@/components/ContactForm";

interface ContactSectionProps {
  formData: { Name: string; Email: string; Phone: string; Message: string };
  errors: { name: string; email: string; phone: string; message: string };
  isSubmitting: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
}

const ContactSection = ({ formData, errors, isSubmitting, handleInputChange, handleFormSubmit }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team to schedule a site visit or learn more about the project
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm
            formData={formData}
            errors={errors}
            isSubmitting={isSubmitting}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />

          <div className="space-y-8">
            <Card className="bg-card border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#1A3C34] dark:bg-[#D4A017] text-white rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A3C34] dark:text-[#D4A017]">Phone</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#1A3C34] dark:bg-[#D4A017] text-white rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A3C34] dark:text-[#D4A017]">Email</h4>
                    <p className="text-muted-foreground">info@shalimar.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#1A3C34] dark:bg-[#D4A017] text-white rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A3C34] dark:text-[#D4A017]">Address</h4>
                    <p className="text-muted-foreground">Aliganj Extension, Lucknow, UP 226024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#1A3C34] dark:bg-[#D4A017] text-white rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A3C34] dark:text-[#D4A017]">Office Hours</h4>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;