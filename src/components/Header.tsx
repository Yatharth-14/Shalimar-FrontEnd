import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";

export const Header = ({ isFormSubmitted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const menuItems = [
    { label: "Homeee", id: "home" },
    { label: "About Project", id: "about" },
    { label: "Amenities", id: "amenities" },
    { label: "Gallery", id: "gallery" },
    { label: "Floor Plans", id: "floor-plans" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Handle Download Brochure click
  const handleDownloadBrochure = () => {
    if (isFormSubmitted) {
      // Trigger download of local PDF
      const link = document.createElement("a");
      link.href = "/lovable-uploads/Marbella Mini Brochure.pdf"; // Absolute path to local PDF
      link.download = "brochure.pdf"; // Suggests download with this filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Scroll to contact and show toast
      scrollToSection("contact");
      toast({
        title: "Form Required",
        description: "Please fill out the form to download the brochure.",
        variant: "destructive",
        duration: 5000,
        className: "bg-[#1A3C34] text-white border-[#D4A017]",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 custom-md:h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src="/lovable-uploads/logo.png"
              alt="Shalimar One World"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden custom-md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium transition-colors hover:text-[#D4A017] text-foreground"
              >
                {item.label}
              </button>
            ))}
            <button
              key="download-brochure"
              onClick={handleDownloadBrochure}
              className="text-sm font-medium transition-colors hover:text-[#D4A017] text-foreground"
            >
              Download Brochure
            </button>
          </nav>

          {/* Right side actions */}
          <div className="hidden custom-md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#D4A017] hover:bg-[#B8901A] text-white px-6 py-2 font-semibold transition-all duration-300 hover:scale-105"
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="custom-md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-[#D4A017]"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="custom-md:hidden border-t bg-background">
            <nav className="py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-[#D4A017] hover:bg-accent text-foreground"
                >
                  {item.label}
                </button>
              ))}
              <button
                key="download-brochure"
                onClick={handleDownloadBrochure}
                className="block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-[#D4A017] hover:bg-accent text-foreground"
              >
                Download Brochure
              </button>
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-[#D4A017] hover:bg-[#B8901A] text-white font-semibold"
                >
                  Enquire Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
