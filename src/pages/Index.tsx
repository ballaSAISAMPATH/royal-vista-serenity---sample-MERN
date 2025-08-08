// src/pages/Index.jsx

import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import BookingWidget from "@/components/BookingWidget";
import ExperienceSection from "@/components/ExperienceSection";
import LocationSection from "@/components/LocationSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "../components/NavBar";
import ChatbotWidget from "@/components/ChatbotWidget";
import Footer from "@/components/Footer"; // <-- Import the Footer component
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SplineCanvas from "@/components/SplineCanvas";

const Index = () => {
  const [isBookingWidgetOpen, setIsBookingWidgetOpen] = useState(false);
  useScrollAnimation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background luxury-scroll relative">
      <Navbar
        isBookingWidgetOpen={isBookingWidgetOpen}
        setIsBookingWidgetOpen={setIsBookingWidgetOpen}
      />

      <div id="hero" className="relative z-10">
        <HeroSection />
      </div>

      <SplineCanvas />

      <BookingWidget 
        isOpen={isBookingWidgetOpen}
        setIsOpen={setIsBookingWidgetOpen}
      />
      
      <ChatbotWidget />

      <div className="slide-in-on-scroll" id="experience">
        <ExperienceSection />
      </div>
      
      <div className="slide-in-on-scroll" id="location">
        <LocationSection />
      </div>
      
      <div className="slide-in-on-scroll" id="testimonials">
        <TestimonialSection />
      </div>
      
      <div className="slide-in-on-scroll" id="contact">
        <ContactSection />
      </div>

      <Footer /> {/* <-- Add the Footer here */}
    </div>
  );
};

export default Index;