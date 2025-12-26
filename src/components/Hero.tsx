import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { useContactModal } from "./ContactModalContext";

const Hero = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <img 
              src="/logo.png" 
              alt="Lakecity Design" 
              className="h-10 w-auto"
            />
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Wedding stationery & pitch decks that make people say{" "}
            <span className="text-gradient">'wow'</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mt-4 block">
              —designed and delivered in under a week.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            No hourly rates. No endless revisions. Just flat-price packages and print-ready files.
          </p>

          {/* CTAs - Two Big Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => openModal("call")}
            >
              <Calendar className="w-5 h-5" />
              Book a 15-min Call
            </Button>
            <Button 
              size="xl" 
              onClick={() => openModal("project")}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>

          {/* Secondary CTA */}
          <div
            className="mt-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#services">
                See Our Packages
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
