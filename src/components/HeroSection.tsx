import { useState, useEffect } from "react";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { Play, Star, MapPin, Users, ChefHat, Car } from "lucide-react";
import heroImage from "@/assets/villa-hero.jpg";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Simulation */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        {/* Animated overlay for video effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/30 animate-pulse" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Trust Badge */}
          <div className="glass-card inline-flex items-center gap-2 mb-8 text-sm">
            <Star className="w-4 h-4 text-luxury-gold fill-current" />
            <span className="text-luxury-cream">5.0 Rating</span>
            <span className="text-luxury-gold">•</span>
            <span className="text-luxury-cream">200+ Reviews</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-luxury-cream mb-6 leading-tight">
            Where Luxury Meets
            <span className="block text-luxury-gold">Serenity</span>
          </h1>

          {/* Subtext with Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-luxury-cream/90">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
                <div className="w-4 h-4 bg-luxury-navy rounded-full" />
              </div>
              <span className="text-lg">Private Pool</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="w-8 h-8 text-luxury-gold" />
              <span className="text-lg">Chef-Cooked Meals</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-8 h-8 text-luxury-gold" />
              <span className="text-lg">Elegant Interiors</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <LuxuryButton variant="hero" size="lg" className="min-w-48">
              Book Your Stay
            </LuxuryButton>
            <LuxuryButton variant="outline" size="lg" className="min-w-48">
              <Play className="w-5 h-5 mr-2" />
              Virtual Tour
            </LuxuryButton>
          </div>

          {/* Location Highlight */}
          <div className="glass-card inline-flex items-center gap-2 text-luxury-cream">
            <Car className="w-5 h-5 text-luxury-gold" />
            <MapPin className="w-5 h-5 text-luxury-gold" />
            <span className="text-lg">Just 2 hours from Mumbai & Pune</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;