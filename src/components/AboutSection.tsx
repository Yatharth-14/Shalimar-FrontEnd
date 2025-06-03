import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const milestones = [
  { year: "1985", title: "Foundation", description: "Shalimar Group established" },
  { year: "2000", title: "Expansion", description: "Extended across UP" },
  { year: "2015", title: "Innovation", description: "Smart home technologies" },
  { year: "2024", title: "Shalimar One World", description: "Our most prestigious project" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop"
              alt="Shalimar Group"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <Badge className="bg-[#D4A017] text-white mb-4">Since 1985</Badge>
            <h2 className="text-4xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-6">
              Trusted Real Estate Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Shalimar Group has been a pioneering force in real estate development since 1985. 
              With over three decades of experience, we have consistently delivered exceptional 
              residential and commercial projects that redefine modern living.
            </p>
            <div className="flex items-center space-x-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4A017]">35+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4A017]">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4A017]">10k+</div>
                <div className="text-muted-foreground">Happy Families</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <Card key={index} className="bg-card border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-[#D4A017] mb-2">{milestone.year}</div>
                <h4 className="text-lg font-bold text-[#1A3C34] dark:text-[#D4A017] mb-3">{milestone.title}</h4>
                <p className="text-muted-foreground text-sm">{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;