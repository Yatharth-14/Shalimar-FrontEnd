
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A3C34] dark:bg-[#0F2A24] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/lovable-uploads/80a9172b-2080-4716-aa99-e0e05fdfe092.png"
                alt="Shalimar One World"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the pinnacle of luxury living at Shalimar One World. Located in the heart of Lucknow, 
              our premium residential project offers world-class amenities and modern architecture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#2A4C44] dark:bg-[#1A3C34] rounded-lg flex items-center justify-center hover:bg-[#D4A017] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2A4C44] dark:bg-[#1A3C34] rounded-lg flex items-center justify-center hover:bg-[#D4A017] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2A4C44] dark:bg-[#1A3C34] rounded-lg flex items-center justify-center hover:bg-[#D4A017] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2A4C44] dark:bg-[#1A3C34] rounded-lg flex items-center justify-center hover:bg-[#D4A017] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-[#D4A017] transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-[#D4A017] transition-colors text-left">About Project</button>
              <button onClick={() => scrollToSection('amenities')} className="block text-gray-300 hover:text-[#D4A017] transition-colors text-left">Amenities</button>
              <button onClick={() => scrollToSection('gallery')} className="block text-gray-300 hover:text-[#D4A017] transition-colors text-left">Gallery</button>
              <button onClick={() => scrollToSection('floor-plans')} className="block text-gray-300 hover:text-[#D4A017] transition-colors text-left">Floor Plans</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-[#D4A017] transition-colors text-left">Contact</button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D4A017] mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Shalimar One World, Aliganj Extension, Lucknow, Uttar Pradesh 226024
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#D4A017]" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-[#D4A017] transition-colors text-sm">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#D4A017]" />
                <a href="mailto:info@shalimar.com" className="text-gray-300 hover:text-[#D4A017] transition-colors text-sm">
                  info@shalimar.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 Shalimar One World. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-[#D4A017] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-[#D4A017] transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-[#D4A017] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
