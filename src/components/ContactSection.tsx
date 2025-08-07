import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { LuxuryButton } from "@/components/ui/luxury-button";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,215,0,0.1)_50%,transparent_51%)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-luxury-cream mb-6">
            Plan Your <span className="text-luxury-gold">Escape</span>
          </h2>
          <p className="text-xl text-luxury-cream/80 max-w-3xl mx-auto">
            Ready to experience luxury? Our concierge team is here to help you plan the perfect stay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in-up">
            <div className="glass-card p-8">
              <h3 className="font-serif text-2xl font-semibold text-luxury-cream mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="glass rounded-full p-3 flex-shrink-0">
                    <Phone className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-cream mb-1">Call Us</h4>
                    <p className="text-luxury-cream/70 mb-2">24/7 Concierge Service</p>
                    <a href="tel:+917788990011" className="text-luxury-gold hover:text-luxury-gold-light transition-colors">
                      +91 77889 90011
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="glass rounded-full p-3 flex-shrink-0">
                    <Mail className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-cream mb-1">Email Us</h4>
                    <p className="text-luxury-cream/70 mb-2">Quick response guaranteed</p>
                    <a href="mailto:stay@97royalvista.com" className="text-luxury-gold hover:text-luxury-gold-light transition-colors">
                      stay@97royalvista.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="glass rounded-full p-3 flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-cream mb-1">WhatsApp</h4>
                    <p className="text-luxury-cream/70 mb-2">Instant messaging support</p>
                    <a href="https://wa.me/917788990011" className="text-luxury-gold hover:text-luxury-gold-light transition-colors">
                      Chat with us
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="glass rounded-full p-3 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-cream mb-1">Visit Us</h4>
                    <p className="text-luxury-cream/70 mb-2">97 Royal Vista, Premium Hills</p>
                    <p className="text-luxury-cream/70">Lonavala, Maharashtra 410401</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="glass rounded-full p-3 flex-shrink-0">
                    <Clock className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-cream mb-1">Availability</h4>
                    <p className="text-luxury-cream/70">Check-in: 3:00 PM</p>
                    <p className="text-luxury-cream/70">Check-out: 11:00 AM</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-3">
                <LuxuryButton variant="hero" className="w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now to Book
                </LuxuryButton>
                <LuxuryButton variant="outline" className="w-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </LuxuryButton>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="glass-card p-8">
              <h3 className="font-serif text-2xl font-semibold text-luxury-cream mb-8">
                Request Information
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-luxury-cream/70 text-sm mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full glass rounded-lg p-3 text-luxury-cream placeholder-luxury-cream/50 border-0 focus:ring-2 focus:ring-luxury-gold"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-cream/70 text-sm mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full glass rounded-lg p-3 text-luxury-cream placeholder-luxury-cream/50 border-0 focus:ring-2 focus:ring-luxury-gold"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-luxury-cream/70 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full glass rounded-lg p-3 text-luxury-cream placeholder-luxury-cream/50 border-0 focus:ring-2 focus:ring-luxury-gold"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-luxury-cream/70 text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full glass rounded-lg p-3 text-luxury-cream placeholder-luxury-cream/50 border-0 focus:ring-2 focus:ring-luxury-gold"
                    placeholder="+91 12345 67890"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-luxury-cream/70 text-sm mb-2">Check-in Date</label>
                    <input
                      type="date"
                      className="w-full glass rounded-lg p-3 text-luxury-cream border-0 focus:ring-2 focus:ring-luxury-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-cream/70 text-sm mb-2">Check-out Date</label>
                    <input
                      type="date"
                      className="w-full glass rounded-lg p-3 text-luxury-cream border-0 focus:ring-2 focus:ring-luxury-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-luxury-cream/70 text-sm mb-2">Special Requests</label>
                  <textarea
                    rows={4}
                    className="w-full glass rounded-lg p-3 text-luxury-cream placeholder-luxury-cream/50 border-0 focus:ring-2 focus:ring-luxury-gold resize-none"
                    placeholder="Tell us about any special requirements or preferences..."
                  />
                </div>

                <LuxuryButton variant="hero" className="w-full">
                  Send Request
                </LuxuryButton>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/917788990011"
          className="glass-card p-4 rounded-full hover:scale-110 transition-transform duration-300 animate-float"
        >
          <MessageCircle className="w-8 h-8 text-luxury-gold" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;