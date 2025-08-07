import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "An absolutely magical experience! The villa exceeded all our expectations. The pool, the views, the service - everything was perfect. Our family will definitely be returning.",
    avatar: "PS",
    experience: "Family Vacation"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Pune",
    rating: 5,
    text: "Perfect romantic getaway! The sunset from the villa was breathtaking. The staff went above and beyond to make our anniversary special. Highly recommended!",
    avatar: "RK",
    experience: "Romantic Escape"
  },
  {
    id: 3,
    name: "Sarah Williams",
    location: "Bangalore",
    rating: 5,
    text: "As a remote worker, this villa was a dream come true. Fast WiFi, stunning views, and complete peace. I was more productive here than in any office!",
    avatar: "SW",
    experience: "Work Retreat"
  },
  {
    id: 4,
    name: "Amit Patel",
    location: "Mumbai",
    rating: 5,
    text: "The luxury and attention to detail is unmatched. From the chef's meals to the pristine pool, every moment felt like we were at a 5-star resort.",
    avatar: "AP",
    experience: "Luxury Stay"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-luxury-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-luxury-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16 fade-in-up">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-luxury-cream mb-6">
            Guest <span className="text-luxury-gold">Stories</span>
          </h2>
          <p className="text-xl text-luxury-cream/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our guests say about their luxury experience.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative fade-in-up">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="w-16 h-16 text-luxury-gold" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-luxury-gold fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-luxury-cream mb-8 leading-relaxed font-medium">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Guest Info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-luxury-navy font-bold text-lg">
                  {currentTestimonial.avatar}
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-luxury-cream text-lg">
                  {currentTestimonial.name}
                </h4>
                <p className="text-luxury-cream/70">{currentTestimonial.location}</p>
                <span className="inline-block glass rounded-full px-3 py-1 text-sm text-luxury-gold mt-2">
                  {currentTestimonial.experience}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="glass rounded-full p-3 hover:bg-luxury-gold/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-luxury-gold" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-luxury-gold w-8' 
                      : 'bg-luxury-cream/30 hover:bg-luxury-cream/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="glass rounded-full p-3 hover:bg-luxury-gold/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-luxury-gold" />
            </button>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-3 gap-8 mt-16 fade-in-up">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">200+</div>
            <div className="text-luxury-cream/70">Happy Guests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">5.0</div>
            <div className="text-luxury-cream/70">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">95%</div>
            <div className="text-luxury-cream/70">Return Guests</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;