import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import FormModal from "@/components/FormModal";

interface FloorPlan {
  title: string;
  area: string;
  image: string;
}

const floorPlans: FloorPlan[] = [
  {
    title: "Tower A, B and D",
    area: "",
    image: "../lovable-uploads/Floor-Plan-1.png",
  },
  {
    title: "Tower C 2 BHK + Study",
    area: "89.62 SQ.MT. (964.67 SQ.FT.)",
    image: "../lovable-uploads/Floor-Plan-2.png",
  },
  {
    title: "Tower C 3 BHK + Servants Quarter",
    area: "108.54 SQ.MT. (1168.32 SQ.FT.)",
    image: "../lovable-uploads/Floor-Plan-3.png",
  },
  {
    title: "3 BHK Tower A, B and D",
    area: "102.56 SQ.MT. (1103.96 SQ.FT.)",
    image: "../lovable-uploads/Floor-Plan-4.png",
  },
  {
    title: "3BHK + Servant Quarter Tower A, B and D",
    area: "128.15 SQ.MT. (1379.41 SQ.FT.)",
    image: "../lovable-uploads/Floor-Plan-5.png",
  },
];

const FloorPlansSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<FloorPlan | null>(null);

  const handleCardClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadClick = (plan: FloorPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <section
        id="floor-plans"
        className="py-12 px-4 sm:py-16 md:py-20 bg-[#F5E6CC] dark:bg-[#2A2520]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-4">
              Floor Plans
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              With focus on detailing and exquisite structure, This is where true
              craftsmanship resides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {floorPlans.map((plan, index) => (
              <Card
                key={index}
                className="bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={handleCardClick}
              >
                <CardContent className="p-3 sm:p-4 flex flex-col min-h-[280px] sm:min-h-[320px]">
                  <div className="flex flex-col flex-grow">
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="w-full max-h-36 sm:max-h-48 object-contain rounded-lg mb-3 blur-sm"
                      loading="lazy"
                    />
                    <h3 className="text-base sm:text-lg font-bold text-[#1A3C34] dark:text-[#D4A017] mb-2 line-clamp-2 min-h-[40px] sm:min-h-[48px]">
                      {plan.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 min-h-[20px] sm:min-h-[24px]">
                      {plan.area}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-2 w-full"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click from triggering
                      handleDownloadClick(plan);
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {isModalOpen && <FormModal plan={selectedPlan} onClose={handleModalClose} />}
    </>
  );
};

export default FloorPlansSection;