import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const galleryImages = [
  "../lovable-uploads/Project-Gallery-1.png",
  "../lovable-uploads/Project-Gallery-2.png",
  "../lovable-uploads/Project-Gallery-3.png",
  "../lovable-uploads/Project-Gallery-4.png",
  "../lovable-uploads/Project-Gallery-5.jpg",
  "../lovable-uploads/Project-Gallery-6.jpg",
];

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="py-12 px-4 sm:py-16 md:py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-4">
            Project Gallery
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour of our stunning architecture and beautiful spaces
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          // pagination={{ clickable: true }}
          // navigation={true}
          className="w-full"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Card
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-none"
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySection;