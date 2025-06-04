import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const floorPlans = [
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
    area: "102.56 SQ.MT. (1103.96 SQ.FT.",
    image: "../lovable-uploads/Floor-Plan-4.png",
  },
  {
    title: "3BHK + Servant Quarter Tower A, B and D",
    area: "128.15 SQ.MT. (1379.41 SQ.FT.)",
    image: "../lovable-uploads/Floor-Plan-5.png",
  },
];

const FloorPlansSection = () => {
  return (
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
              className="bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-4 sm:p-6 flex flex-col justify-between min-h-[360px] sm:min-h-[400px]">
                <div>
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full max-h-48 sm:max-h-64 object-contain rounded-lg mb-4 blur-sm"
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-2 line-clamp-2">
                    {plan.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    {plan.area}
                  </p>
                </div>
                <Button className="w-full bg-[#1A3C34] hover:bg-[#2A4C44] dark:bg-[#D4A017] dark:hover:bg-[#B8901A] text-white text-sm sm:text-base">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
