import { Heart, Presentation, PartyPopper, Globe, Palette, CheckCircle } from "lucide-react";

const capabilities = [
  {
    icon: Heart,
    title: "Wedding & Celebration Design",
    items: [
      "Invitation suites & save-the-dates",
      "Menu cards & place settings",
      "Programs & ceremony booklets",
      "Thank you cards & favor tags",
      "Signage & welcome boards",
      "Digital invitations & RSVP systems",
    ],
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  {
    icon: Presentation,
    title: "Business Presentations",
    items: [
      "Investor pitch decks",
      "Sales & proposal decks",
      "Concept presentations",
      "Corporate annual reports",
      "Marketing strategy decks",
      "Product launch presentations",
    ],
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: PartyPopper,
    title: "Event Printables",
    items: [
      "Conference materials & agendas",
      "Name badges & lanyards",
      "Event signage & banners",
      "Program booklets",
      "Table numbers & seating charts",
      "Photo booth props & backdrops",
    ],
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Globe,
    title: "Websites & Digital",
    items: [
      "Portfolio websites",
      "Business & corporate sites",
      "Landing pages & microsites",
      "E-commerce solutions",
      "Blog & content platforms",
      "Mobile-responsive designs",
    ],
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
];

const additionalServices = [
  "Brand identity & logos",
  "Social media graphics",
  "Business cards & stationery",
  "Brochures & catalogs",
  "Packaging design",
  "Email templates",
  "Infographics",
  "Digital ads & banners",
];

const Work = () => {
  return (
    <section id="work" className="py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4 block">
            What We Deliver
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Our <span className="text-gradient">capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into what we can create for you. Every project is custom-crafted 
            to match your vision and exceed expectations.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="group relative p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                    <capability.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold">
                    {capability.title}
                  </h3>
                </div>

                {/* Items List */}
                <ul className="space-y-3">
                  {capability.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-card border border-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
              <Palette className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold">
                Plus Everything Else
              </h3>
              <p className="text-muted-foreground">
                If it needs design, we can create it
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {additionalServices.map((service) => (
              <span
                key={service}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {service}
              </span>
            ))}
            <span className="px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm">
              + anything you need
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
