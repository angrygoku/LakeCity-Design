import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              <span className="text-primary font-semibold">Lakecity</span> Designs
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Every design
            <br />
            <span className="text-gradient">you can imagine</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Wedding stationery, pitch decks, event printables, beautiful websites—
            from the smallest detail to the biggest vision. We bring your ideas to life.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">See What We Create</a>
            </Button>
          </div>

          {/* Trust Statement */}
          <div
            className="mt-20 pt-12 border-t border-border/50 max-w-3xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <p className="text-lg md:text-xl font-display font-medium text-foreground mb-4">
              No project too small. No vision too big.
            </p>
            <p className="text-muted-foreground">
              We partner with you to create designs that build trust, impress clients, 
              and elevate your brand—every single time.
            </p>
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
