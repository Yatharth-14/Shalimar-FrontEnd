import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PopupBanner } from "@/components/PopupBanner";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import FloorPlansSection from "@/components/FloorPlansSection";
import FormComponent from "../components/FormComponent";
import CallToActionSection from "@/components/CallToActionSection";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const heroImages = [
    "../lovable-uploads/Hero Carousel 1.png",
    "../lovable-uploads/Hero Carousel 2.png",
    "../lovable-uploads/Hero Carousel 3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleFormSubmission = () => {
    setIsFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header isFormSubmitted={isFormSubmitted} />
      <HeroSection currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} heroImages={heroImages} />
      <HighlightsSection />
      <AboutSection />
      <AmenitiesSection />
      <GallerySection />
      <FloorPlansSection />
      <FormComponent onFormSubmit={handleFormSubmission} />
      <CallToActionSection />
      <Footer />
      <WhatsAppButton />
      <PopupBanner />
    </div>
  );
};

export default Index;