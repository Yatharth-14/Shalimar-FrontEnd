import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import EnquiryFormModal from "./EnquiryFormModal";

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: Building2,
    title: "Luxury Apartments",
    description:
      "Premium 2BHK & 3BHK apartments with modern amenities and world-class facilities.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Strategically located in Lucknow with excellent connectivity to major landmarks.",
  },
  {
    icon: Users,
    title: "Modern Amenities",
    description:
      "Swimming pool, gymnasium, clubhouse, and 24/7 security for comfortable living.",
  },
];

const HighlightsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="py-20 px-4 bg-[#F5E6CC] dark:bg-[#2A2520]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-4">
              Why Choose Shalimar One World?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of luxury, comfort, and modern living
              in the heart of Lucknow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                onClick={handleCardClick}
                className="cursor-pointer"
              >
                <Card
                  className="bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-80 flex flex-col justify-between"
                >
                  <CardContent className="p-8 text-center flex flex-col items-center justify-between h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A3C34] dark:bg-[#D4A017] text-white rounded-full mb-6">
                      <highlight.icon className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col items-center flex-grow justify-center">
                      <h3 className="text-xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-4">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isModalOpen && (
        <EnquiryFormModal
          onClose={handleModalClose}
          title="Enquiry About Shalimar Marbella"
        />
      )}
    </>
  );
};

export default HighlightsSection;