
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-background rounded-lg shadow-2xl max-w-md w-full p-6 relative animate-scale-in border">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-[#D4A017] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">🏠</span>
          </div>
          <h3 className="text-2xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-2">
            Book a Site Visit Today!
          </h3>
          <p className="text-muted-foreground mb-6">
            Experience luxury living firsthand. Schedule your personal tour of Shalimar One World.
          </p>
          <div className="space-y-3">
            <Button 
              className="w-full bg-[#D4A017] hover:bg-[#B8901A] text-white font-semibold"
              onClick={scrollToContact}
            >
              Book Site Visit
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-border text-muted-foreground"
              onClick={() => setIsVisible(false)}
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
