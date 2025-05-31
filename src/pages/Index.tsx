
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PopupBanner } from "@/components/PopupBanner";
import { Building2, MapPin, Users, Star, Dumbbell, Car, Shield, Waves, TreePine, Building, Phone, Mail, Calendar, Award, Download } from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const heroImages = [
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1440&h=800&fit=crop",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1440&h=800&fit=crop",
    "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=1440&h=800&fit=crop"
  ];

  const highlights = [
    {
      icon: Building2,
      title: "Luxury Apartments",
      description: "Premium 2BHK & 3BHK apartments with modern amenities and world-class facilities."
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Strategically located in Lucknow with excellent connectivity to major landmarks."
    },
    {
      icon: Users,
      title: "Modern Amenities",
      description: "Swimming pool, gymnasium, clubhouse, and 24/7 security for comfortable living."
    }
  ];

  const amenities = [
    { icon: Waves, title: "Swimming Pool", description: "Olympic-size swimming pool with kids' area" },
    { icon: Dumbbell, title: "Gymnasium", description: "Fully equipped modern fitness center" },
    { icon: Car, title: "Parking", description: "Covered parking for all residents" },
    { icon: Shield, title: "24/7 Security", description: "Round-the-clock security with CCTV" },
    { icon: TreePine, title: "Landscaped Gardens", description: "Beautiful green spaces and gardens" },
    { icon: Building, title: "Clubhouse", description: "Community clubhouse for events" }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1571880885639-d7bf3d0afe99?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
  ];

  const floorPlans = [
    { title: "2BHK", area: "950 sq ft", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
    { title: "3BHK", area: "1250 sq ft", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
    { title: "3BHK Premium", area: "1450 sq ft", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" }
  ];

  const milestones = [
    { year: "1985", title: "Foundation", description: "Shalimar Group established" },
    { year: "2000", title: "Expansion", description: "Extended across UP" },
    { year: "2015", title: "Innovation", description: "Smart home technologies" },
    { year: "2024", title: "Shalimar One World", description: "Our most prestigious project" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here - you can integrate with your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Shalimar One World ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Welcome to Shalimar One World
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              Discover Luxury Living in Lucknow
            </p>
            <Button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#D4A017] hover:bg-[#B8901A] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Explore Now
            </Button>
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#D4A017]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 px-4 bg-[#F5E6CC] dark:bg-[#2A2520]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-4">
              Why Choose Shalimar One World?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of luxury, comfort, and modern living in the heart of Lucknow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A3C34] dark:bg-[#D4A017] text-white rounded-full mb-6">
                    <highlight.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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

          {/* Timeline */}
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

      {/* Amenities Section */}
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
              <Card key={index} className="bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-4">
              Project Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a visual tour of our stunning architecture and beautiful spaces
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team to schedule a site visit or learn more about the project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-6">Send us a Message</h3>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#D4A017] hover:bg-[#B8901A] text-white font-semibold py-3">
                    Send Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#1A3C34] dark:bg-[#D4A017] text-white rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A3C34] dark:text-[#D4A017]">Phone</h4>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#1A3C34] dark:bg-[#D4A017] text-white rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A3C34] dark:text-[#D4A017]">Email</h4>
                      <p className="text-muted-foreground">info@shalimar.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#1A3C34] dark:bg-[#D4A017] text-white rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A3C34] dark:text-[#D4A017]">Address</h4>
                      <p className="text-muted-foreground">Aliganj Extension, Lucknow, UP 226024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#1A3C34] dark:bg-[#D4A017] text-white rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A3C34] dark:text-[#D4A017]">Office Hours</h4>
                      <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-[#1A3C34] dark:bg-[#0F2A24] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a site visit today and experience luxury living at Shalimar One World
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#D4A017] hover:bg-[#B8901A] text-white px-8 py-4 text-lg font-semibold"
            >
              Book Site Visit
            </Button>
            <Button 
              onClick={() => document.getElementById('floor-plans')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#1A3C34] px-8 py-4 text-lg font-semibold"
            >
              View Floor Plans
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <PopupBanner />
    </div>
  );
};

export default Index;
