import { Globe, Palette, ShoppingCart, Smartphone, Search, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    price: "₹25k onwards",
    description: "Modern, fast-loading sites that establish credibility",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    price: "₹40k onwards",
    description: "Online stores with secure payments & inventory management",
  },
  {
    icon: Smartphone,
    title: "Landing Pages",
    price: "₹15k onwards",
    description: "High-converting pages for campaigns & product launches",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    price: "₹20k onwards",
    description: "Beautiful interfaces that users love to interact with",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    price: "₹10k onwards",
    description: "Get found on Google with on-page & technical SEO",
  },
  {
    icon: Rocket,
    title: "Website Redesign",
    price: "₹30k onwards",
    description: "Transform your outdated site into a modern powerhouse",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            What we <span className="text-gradient">build</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From simple landing pages to complex web applications—we bring your digital vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-display font-bold mb-1">
                {service.title}
              </h3>
              
              {/* Price */}
              <p className="text-primary font-semibold mb-2">{service.price}</p>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-secondary/30 border border-border">
          <h3 className="text-xl font-display font-bold mb-2">Need something custom?</h3>
          <p className="text-muted-foreground mb-4">
            Every project is unique. Let's discuss your requirements.
          </p>
          <Button variant="default" asChild>
            <a href="#contact">
              Get a Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
