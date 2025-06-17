import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  heroMedia: { src: string; type: 'video' };
}

const HeroSection = ({ heroMedia }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative w-full h-[300px] lg:h-[1000px] md:h-[500px] sm:h-[300px] overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src={heroMedia.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          {/* Logo and Price Row */}
          <div className="flex flex-col sm:flex-row  items-center justify-center mb-4 mt-5 sm:mb-6 gap-3 animate-fade-in">
            <img
              src="../lovable-uploads/marbella-logo.png"
              alt="Shalimar Logo"
              className="w-[80px] sm:w-[100px] md:w-[200px] lg:w-[300px] h-auto object-contain brightness-200"
            />
            <span className="text-[#FFD700] sm:text-xl md:text-3xl lg:text-4xl font-extrabold px-4 py-1 border-2 border-[#FFD700] rounded-lg animate-pulse shadow-lg">
              Starting 1.15 Cr
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">
            Welcome to Shalimar Marbella
          </h1>

          {/* Subheading */}
          <p className="text-white text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 animate-fade-in">
            Discover Luxury Living in Lucknow
          </p>

          {/* CTA Button */}
          <Button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#D4A017] hover:bg-[#B8901A] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
