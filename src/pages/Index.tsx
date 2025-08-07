import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import BookingWidget from "@/components/BookingWidget";
import ExperienceSection from "@/components/ExperienceSection";
import LocationSection from "@/components/LocationSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background luxury-scroll">
      {/* Navigation would go here */}
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Floating Booking Widget */}
      <BookingWidget />
      
      {/* Experience Highlights */}
      <ExperienceSection />
      
      {/* Location Section */}
      <LocationSection />
      
      {/* Testimonials */}
      <TestimonialSection />
      
      {/* Contact & Booking */}
      <ContactSection />
    </div>
  );
};

export default Index;
