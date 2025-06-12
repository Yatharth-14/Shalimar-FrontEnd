import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Dumbbell, Car, Shield, TreePine, Building } from "lucide-react";
import EnquiryFormModal from "../components/EnquiryFormModal";

const amenities = [
  { icon: Waves, title: "Swimming Pool", description: "Olympic-size swimming pool with kids' area" },
  { icon: Dumbbell, title: "Gymnasium", description: "Fully equipped modern fitness center" },
  { icon: Car, title: "Parking", description: "Covered parking for all residents" },
  { icon: Shield, title: "24/7 Security", description: "Round-the-clock security with CCTV" },
  { icon: TreePine, title: "Landscaped Gardens", description: "Beautiful green spaces and gardens" },
  { icon: Building, title: "Clubhouse", description: "Community clubhouse for events" },
];

const AmenitiesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="amenities" className="py-20 px-4 bg-[#F5E6CC] dark:bg-[#2A2520]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-4">
              World-Class Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enjoy a lifestyle of luxury with our comprehensive range of modern amenities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {amenities.map((amenity, index) => (
              <Card key={index} className="bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={handleCardClick}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1A3C34] dark:bg-[#D4A017] text-white rounded-full mb-4">
                    <amenity.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A3C34] dark:text-[#D4A017] mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {isModalOpen && <EnquiryFormModal onClose={handleModalClose} title="Enquire About Amenities" />}
    </>
  );
};

export default AmenitiesSection;