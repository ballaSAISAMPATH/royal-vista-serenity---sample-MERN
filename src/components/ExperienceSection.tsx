import { Heart, Briefcase, Users, ArrowRight } from "lucide-react";
import { LuxuryButton } from "@/components/ui/luxury-button";
import familyImage from "@/assets/family-experience.jpg";
import romanticImage from "@/assets/romantic-experience.jpg";
import workImage from "@/assets/work-experience.jpg";

const experiences = [
  {
    title: "Family Getaways",
    description: "Create unforgettable memories with spacious accommodations, child-friendly amenities, and activities for all ages.",
    icon: Users,
    image: familyImage,
    features: ["Pool Safety Features", "Family Activities", "Spacious Interiors"],
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  {
    title: "Romantic Escapes",
    description: "Intimate moments await with private dining, sunset views, and luxurious amenities designed for couples.",
    icon: Heart,
    image: romanticImage,
    features: ["Private Dining", "Sunset Views", "Couples Spa"],
    gradient: "from-pink-600/20 to-red-600/20"
  },
  {
    title: "Work-from-Villa Retreats",
    description: "Productive remote work environment with high-speed internet, quiet spaces, and inspiring mountain views.",
    icon: Briefcase,
    image: workImage,
    features: ["High-Speed WiFi", "Dedicated Workspace", "Mountain Views"],
    gradient: "from-green-600/20 to-teal-600/20"
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-luxury-cream mb-6">
            Curated <span className="text-luxury-gold">Experiences</span>
          </h2>
          <p className="text-xl text-luxury-cream/80 max-w-3xl mx-auto leading-relaxed">
            Every stay is crafted to perfection, whether you're seeking adventure, romance, or peaceful productivity.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <div
                key={experience.title}
                className="group relative overflow-hidden rounded-2xl luxury-hover fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Card Background */}
                <div className="relative h-96">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${experience.image})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${experience.gradient} to-black/60`} />
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-gold/0 via-luxury-gold/0 to-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Icon */}
                  <div className="self-start">
                    <div className="glass rounded-2xl p-4 w-fit group-hover:shadow-gold transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-luxury-gold" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-2xl font-semibold text-luxury-cream mb-3">
                      {experience.title}
                    </h3>
                    <p className="text-luxury-cream/80 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {experience.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
                          <span className="text-luxury-cream/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <LuxuryButton 
                      variant="ghost" 
                      size="sm" 
                      className="group/btn opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                    </LuxuryButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up">
          <LuxuryButton variant="outline" size="lg">
            View All Experiences
          </LuxuryButton>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;