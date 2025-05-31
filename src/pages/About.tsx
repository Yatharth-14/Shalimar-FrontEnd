
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Award, Users, Calendar } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "1985",
      title: "Foundation",
      description: "Shalimar Group established with a vision to transform real estate"
    },
    {
      year: "2000",
      title: "Expansion",
      description: "Extended operations across multiple cities in Uttar Pradesh"
    },
    {
      year: "2015",
      title: "Innovation",
      description: "Introduced smart home technologies and sustainable construction"
    },
    {
      year: "2024",
      title: "Shalimar One World",
      description: "Launching our most prestigious residential project in Lucknow"
    }
  ];

  const values = [
    {
      icon: Building2,
      title: "Quality Construction",
      description: "We use only the finest materials and employ skilled craftsmen to ensure exceptional build quality."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to excellence has earned us numerous awards and recognition in the industry."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize our customers' needs and satisfaction above everything else."
    },
    {
      icon: Calendar,
      title: "Timely Delivery",
      description: "We have a proven track record of completing projects on time, every time."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#1A3C34] to-[#2A4C44] flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Shalimar One World</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Discover the legacy of excellence and the vision behind Lucknow's most prestigious residential project
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                alt="Shalimar One World Project"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <Badge className="bg-[#D4A017] text-white mb-4">Premium Project</Badge>
              <h2 className="text-4xl font-bold text-[#1A3C34] mb-6">
                Redefining Luxury Living in Lucknow
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Shalimar One World represents the pinnacle of modern residential development in Lucknow. 
                Strategically located in the heart of the city, this premium project offers a perfect blend 
                of luxury, comfort, and convenience. With meticulously planned spaces, world-class amenities, 
                and contemporary architecture, Shalimar One World sets new standards for urban living.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our commitment to sustainable development and green building practices ensures that residents 
                enjoy not just luxury, but also an environmentally conscious lifestyle. Every aspect of the 
                project has been designed to enhance the quality of life for our residents.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4A017]">200+</div>
                  <div className="text-gray-600">Premium Units</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4A017]">15+</div>
                  <div className="text-gray-600">Amenities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Info */}
      <section className="py-20 px-4 bg-[#F5E6CC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] mb-4">
              About Shalimar Group
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Founded in 1985, Shalimar Group has been a pioneer in real estate development, 
              consistently delivering projects that exceed expectations and set industry benchmarks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-[#1A3C34] mb-6">Our Legacy</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With nearly four decades of experience in real estate development, Shalimar Group has 
                established itself as a trusted name in the industry. Our journey began with a simple 
                vision: to create homes that combine quality, affordability, and innovation.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Today, we have successfully delivered over 50 residential and commercial projects across 
                Uttar Pradesh, housing more than 10,000 happy families. Our commitment to excellence, 
                transparency, and customer satisfaction has made us one of the most respected developers 
                in the region.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#D4A017]">39</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D4A017]">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D4A017]">10K+</div>
                  <div className="text-sm text-gray-600">Happy Families</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=600&h=500&fit=crop"
                alt="Shalimar Group Legacy"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#1A3C34] text-center mb-12">Our Journey</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="bg-white border-none shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-[#D4A017] mb-2">{milestone.year}</div>
                    <h4 className="text-lg font-bold text-[#1A3C34] mb-3">{milestone.title}</h4>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape the way we build communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A3C34] text-white rounded-full mb-6">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A3C34] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
