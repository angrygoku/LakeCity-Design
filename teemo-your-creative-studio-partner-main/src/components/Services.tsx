import { Heart, Presentation, PartyPopper, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Designs",
    description:
      "Complete wedding stationery suites that tell your love story. Invitations, save-the-dates, menus, programs, and every detail in between.",
    features: ["Invitation Suites", "Menu Cards", "Place Cards", "Programs"],
  },
  {
    icon: Presentation,
    title: "Pitch Decks & Concepts",
    description:
      "Compelling presentations that win investors and clients. From startup pitches to corporate proposals, we make your ideas shine.",
    features: ["Investor Decks", "Sales Presentations", "Concept Designs"],
  },
  {
    icon: PartyPopper,
    title: "Event Printables",
    description:
      "Everything you need for memorable events. Signage, programs, name tags, banners, and custom materials for any occasion.",
    features: ["Event Signage", "Programs & Agendas", "Name Tags", "Banners"],
  },
  {
    icon: Globe,
    title: "Beautiful Websites",
    description:
      "Stunning, modern websites that captivate your audience. From elegant portfolios to full business sites, crafted with care.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
  },
  {
    icon: Palette,
    title: "Any Design You Need",
    description:
      "From the smallest business card to the biggest campaign—if it needs design, we can create it. No project is too small or too large.",
    features: ["Branding", "Social Media", "Print Materials", "Digital Assets"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4 block">
            What We Create
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Design services for <span className="text-gradient">every need</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From intimate wedding details to bold business presentations—we bring
            creativity and precision to every project, big or small.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 md:p-10 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover-lift ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
