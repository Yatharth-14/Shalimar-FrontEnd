import { useState } from "react";
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
import { ReraInfoCard } from "@/components/ReraInfoCard";
import { LocationAdvantages } from "@/components/LocationAdvantages";

const Index = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const heroMedia = {
    src: "../lovable-uploads/ShalimarWalkThrough.mp4",
    type: 'video' as const,
  };

  const handleFormSubmission = () => {
    setIsFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header isFormSubmitted={isFormSubmitted} />
      <ReraInfoCard />
      <HeroSection heroMedia={heroMedia} />
      <HighlightsSection />
      <AboutSection />
      <AmenitiesSection />
      <GallerySection />
      <FloorPlansSection />
      <FormComponent onFormSubmit={handleFormSubmission} />
      <LocationAdvantages />
      <CallToActionSection />
      <Footer />
      <WhatsAppButton />
      <PopupBanner />
    </div>
  );
};

export default Index;