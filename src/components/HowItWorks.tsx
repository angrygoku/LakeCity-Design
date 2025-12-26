import { FileText, Palette, Download } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "5-Min Brief Form",
    description: "Fill out a quick form telling us about your project. No lengthy calls needed to get started.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Get 2 Concepts in 24h",
    description: "We'll send you two design directions to choose from within 24 hours.",
  },
  {
    icon: Download,
    number: "03",
    title: "Receive Print-Ready Files",
    description: "Get your final files plus source links. Ready to print, share, or present.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4 block">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No endless back-and-forth. Just a simple 3-step process to get your designs done.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="text-center group">
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to get started?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Start Your Project Today →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
