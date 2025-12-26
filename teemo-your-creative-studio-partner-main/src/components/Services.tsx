import { Heart, Presentation, PartyPopper, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Heart,
    title: "All-in Wedding Suite",
    price: "₹18,000",
    highlight: "12 pieces, print-ready, guest-ready in 7 days",
    description:
      "Complete wedding stationery that tells your love story. Invitations, save-the-dates, menus, programs, place cards, and every detail in between.",
    features: ["12 Coordinated Pieces", "Print-Ready Files", "7-Day Delivery", "Unlimited Revisions"],
    seoText: "Affordable wedding invitation designers in Udaipur. Beautiful, custom wedding stationery suites delivered fast.",
  },
  {
    icon: Presentation,
    title: "Investor Pitch Deck",
    price: "₹25,000",
    highlight: "12 slides that close seed rounds – 3-day rush available",
    description:
      "Compelling presentations that win investors and clients. Designed to make your startup story shine and secure funding.",
    features: ["12 Custom Slides", "Investor-Ready Design", "3-Day Rush Option", "Source Files Included"],
    seoText: "Professional pitch deck design services in India. Startup presentation design that wins funding rounds.",
  },
  {
    icon: PartyPopper,
    title: "Event Printables Bundle",
    price: "₹12,000",
    highlight: "Signage to table cards, one invoice",
    description:
      "Everything you need for memorable events. Signage, programs, name tags, banners, and custom materials for any occasion.",
    features: ["Complete Event Kit", "Signage & Banners", "Table Cards & Tags", "Single Invoice"],
    seoText: "Event design and printables service in Rajasthan. Corporate event branding and signage design.",
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
            Our Packages
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Fixed scope. <span className="text-gradient">Fixed price.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No surprises, no hidden costs. Choose your package and get results fast.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 md:p-10 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover-lift flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold mb-2">
                {service.title}
              </h3>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary">{service.price}</span>
              </div>
              
              {/* Highlight */}
              <p className="text-sm font-medium text-primary/80 bg-primary/10 px-3 py-2 rounded-lg mb-4">
                {service.highlight}
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                <a href="#contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>

              {/* SEO Text */}
              <p className="text-xs text-muted-foreground/60 mt-4 leading-relaxed">
                {service.seoText}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-secondary/30 border border-border">
          <h3 className="text-xl font-display font-bold mb-2">Need something different?</h3>
          <p className="text-muted-foreground mb-4">
            We also create websites, brand identities, social media graphics, and more.
          </p>
          <Button variant="default" asChild>
            <a href="#contact">Ask for a Custom Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
