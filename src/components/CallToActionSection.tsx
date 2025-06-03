import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
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
  );
};

export default CallToActionSection;