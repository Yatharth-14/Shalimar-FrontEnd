import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  { year: "1985", title: "Foundation", description: "Shalimar Group established" },
  { year: "2000", title: "Expansion", description: "Extended across UP" },
  { year: "2015", title: "Innovation", description: "Smart home technologies" },
  { year: "2024", title: "Shalimar Marbella", description: "Our most prestigious project" }
];

const AboutSection: React.FC = () => {
  const handleCardClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://shalimar-one-world.landmarkrealtors.co.in/images/about.jpg"
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
              Built meticulously with the urban pioneer in mind, Marbella embodies the spirit of those who shatter glass ceilings. From trailblazers to go-getters, we're dedicated to those who don't just chase dreams, but actively build them each day. At Marbella, we celebrate the self-made, offering a world where you can revel in your successes and embrace the life you've earned.
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
            <Card
              key={index}
              onClick={handleCardClick}
              className="bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
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