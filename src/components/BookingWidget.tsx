import { useState } from "react";
import { Calendar, Users, Search, Star, Award, Shield } from "lucide-react";
import { LuxuryButton } from "@/components/ui/luxury-button";

const BookingWidget = () => {
  const [guests, setGuests] = useState(2);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  return (
    <div className="fixed top-20 right-4 z-50 hidden lg:block">
      <div className="glass-card w-80 p-6 animate-fade-in-up">
        <h3 className="font-serif text-xl font-semibold text-luxury-cream mb-4">
          Reserve Your Stay
        </h3>
        
        {/* Trust Badges */}
        <div className="flex justify-between mb-6">
          <div className="glass rounded-lg p-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-luxury-gold fill-current" />
            <span className="text-sm text-luxury-cream">Airbnb</span>
          </div>
          <div className="glass rounded-lg p-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-luxury-gold" />
            <span className="text-sm text-luxury-cream">Google</span>
          </div>
          <div className="glass rounded-lg p-3 flex items-center gap-2">
            <Shield className="w-4 h-4 text-luxury-gold" />
            <span className="text-sm text-luxury-cream">Booking</span>
          </div>
        </div>

        <div className="space-y-4">
          {/* Check-in Date */}
          <div>
            <label className="block text-luxury-cream/70 text-sm mb-2">Check-in</label>
            <div className="relative">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full glass rounded-lg p-3 text-luxury-cream placeholder-luxury-cream/50 border-0 focus:ring-2 focus:ring-luxury-gold"
              />
              <Calendar className="absolute right-3 top-3 w-5 h-5 text-luxury-gold pointer-events-none" />
            </div>
          </div>

          {/* Check-out Date */}
          <div>
            <label className="block text-luxury-cream/70 text-sm mb-2">Check-out</label>
            <div className="relative">
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full glass rounded-lg p-3 text-luxury-cream placeholder-luxury-cream/50 border-0 focus:ring-2 focus:ring-luxury-gold"
              />
              <Calendar className="absolute right-3 top-3 w-5 h-5 text-luxury-gold pointer-events-none" />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-luxury-cream/70 text-sm mb-2">Guests</label>
            <div className="relative">
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full glass rounded-lg p-3 text-luxury-cream bg-transparent border-0 focus:ring-2 focus:ring-luxury-gold appearance-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num} className="bg-luxury-navy text-luxury-cream">
                    {num} Guest{num > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
              <Users className="absolute right-3 top-3 w-5 h-5 text-luxury-gold pointer-events-none" />
            </div>
          </div>

          {/* Price Display */}
          <div className="border-t border-luxury-cream/20 pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-luxury-cream/70">Per night</span>
              <span className="text-luxury-gold font-semibold text-lg">₹25,000</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-luxury-cream/70">Total (3 nights)</span>
              <span className="text-luxury-cream font-bold text-xl">₹75,000</span>
            </div>
          </div>

          {/* Book Button */}
          <LuxuryButton variant="hero" className="w-full">
            <Search className="w-5 h-5 mr-2" />
            Check Availability
          </LuxuryButton>
        </div>

        <p className="text-luxury-cream/60 text-xs mt-4 text-center">
          Free cancellation up to 48 hours before check-in
        </p>
      </div>
    </div>
  );
};

export default BookingWidget;