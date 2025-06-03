const galleryImages = [
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1571880885639-d7bf3d0afe99?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
];

const GallerySection = () => {
  return (
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
  );
};

export default GallerySection;