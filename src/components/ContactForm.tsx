import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormProps {
  formData: { Name: string; Email: string; Phone: string; Message: string };
  errors: { name: string; email: string; phone: string; message: string };
  isSubmitting: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
}

const ContactForm = ({ formData, errors, isSubmitting, handleInputChange, handleFormSubmit }: ContactFormProps) => {
  return (
    <Card className="bg-card border-none shadow-lg">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-6">Send us a Message</h3>
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
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <Button type="submit" className="w-full bg-[#D4A017] hover:bg-[#B8901A] text-white font-semibold py-3" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Enquiry'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;