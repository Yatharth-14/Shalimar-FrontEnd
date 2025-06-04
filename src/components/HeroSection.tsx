import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  heroImages: string[];
}

const HeroSection = ({
  currentSlide,
  setCurrentSlide,
  heroImages,
}: HeroSectionProps) => {
  return (
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
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#D4A017] hover:bg-[#B8901A] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Explore Now
          </Button>
        </div>
      </div>

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
  );
};

export default HeroSection;
