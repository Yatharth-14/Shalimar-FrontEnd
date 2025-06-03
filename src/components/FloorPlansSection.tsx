import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const floorPlans = [
  { title: "2BHK", area: "950 sq ft", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
  { title: "3BHK", area: "1250 sq ft", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
  { title: "3BHK Premium", area: "1450 sq ft", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" }
];

const FloorPlansSection = () => {
  return (
    <section id="floor-plans" className="py-20 px-4 bg-[#F5E6CC] dark:bg-[#2A2520]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-4">
            Floor Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our thoughtfully designed apartment configurations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {floorPlans.map((plan, index) => (
            <Card key={index} className="bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-2">
                  {plan.title}
                </h3>
                <p className="text-muted-foreground mb-4">{plan.area}</p>
                <Button className="w-full bg-[#1A3C34] hover:bg-[#2A4C44] dark:bg-[#D4A017] dark:hover:bg-[#B8901A] text-white">
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