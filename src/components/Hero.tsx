import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Calendar } from "lucide-react";
import { useContactModal } from "./ContactModalContext";

const Hero = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
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
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Websites that convert visitors into{" "}
            <span className="text-gradient">customers</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mt-4 block">
              —designed, built & launched in under 2 weeks.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            No hourly rates. No endless revisions. Just fixed-price packages and pixel-perfect designs.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
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
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold"
            >
              <Instagram className="w-5 h-5" />
              Message Us
            </Button>
          </div>

          <div
            className="mt-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
