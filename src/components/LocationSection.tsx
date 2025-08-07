import { MapPin, Clock, Car, Plane } from "lucide-react";
import { LuxuryButton } from "@/components/ui/luxury-button";
import mountainRoadImage from "@/assets/mountain-road.jpg";

const LocationSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000"
          style={{ 
            backgroundImage: `url(${mountainRoadImage})`,
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-luxury-gold/10 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-luxury-gold/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <div className="glass-card inline-flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-luxury-gold" />
              <span className="text-luxury-cream font-medium">Prime Location</span>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-luxury-cream mb-6 leading-tight">
              Just 2 Hours from
              <span className="block text-luxury-gold">Mumbai & Pune</span>
            </h2>

            <p className="text-xl text-luxury-cream/80 mb-8 leading-relaxed">
              An effortless escape into luxury. Leave the city behind and arrive at your private sanctuary 
              nestled in the serene hills of Lonavala.
            </p>

            {/* Travel Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="glass rounded-full p-3">
                  <Car className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-cream">By Car</h4>
                  <p className="text-luxury-cream/70">2 hours via Mumbai-Pune Expressway</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="glass rounded-full p-3">
                  <Plane className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-cream">By Flight</h4>
                  <p className="text-luxury-cream/70">45 mins to Pune Airport + 1 hour drive</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="glass rounded-full p-3">
                  <Clock className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-cream">Travel Time</h4>
                  <p className="text-luxury-cream/70">Perfect for weekend getaways</p>
                </div>
              </div>
            </div>

            <LuxuryButton variant="hero" size="lg">
              Get Directions
            </LuxuryButton>
          </div>

          {/* Right Content - Interactive Map Area */}
          <div className="fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="glass-card p-8 text-center">
              <div className="w-full h-64 bg-gradient-to-br from-luxury-gold/20 to-luxury-navy/20 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                {/* Map Placeholder with Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 to-transparent animate-pulse" />
                <div className="relative z-10">
                  <MapPin className="w-16 h-16 text-luxury-gold mb-4 animate-glow" />
                  <h3 className="font-serif text-2xl font-semibold text-luxury-cream mb-2">
                    97 Royal Vista
                  </h3>
                  <p className="text-luxury-cream/70">Lonavala, Maharashtra</p>
                </div>
              </div>

              {/* Distance Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4">
                  <h4 className="font-bold text-luxury-gold text-2xl">120km</h4>
                  <p className="text-luxury-cream/70 text-sm">From Mumbai</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <h4 className="font-bold text-luxury-gold text-2xl">65km</h4>
                  <p className="text-luxury-cream/70 text-sm">From Pune</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <LuxuryButton variant="outline" className="w-full">
                  View on Google Maps
                </LuxuryButton>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-20 fade-in-up">
          <h3 className="font-serif text-3xl font-semibold text-luxury-cream text-center mb-12">
            Nearby Attractions
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Tiger's Leap", distance: "5 km" },
              { name: "Bhushi Dam", distance: "8 km" },
              { name: "Karla Caves", distance: "12 km" },
              { name: "Rajmachi Fort", distance: "15 km" }
            ].map((attraction, index) => (
              <div 
                key={attraction.name}
                className="glass-card text-center p-4 luxury-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="font-semibold text-luxury-cream mb-1">{attraction.name}</h4>
                <p className="text-luxury-gold text-sm">{attraction.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;