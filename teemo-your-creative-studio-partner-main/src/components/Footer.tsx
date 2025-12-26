import { Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="font-display text-2xl font-bold tracking-tight hover:text-primary transition-colors inline-block mb-4"
            >
              <span className="text-primary">Lakecity</span> Designs
            </a>
            <p className="text-sm text-muted-foreground">
              Every design you can imagine.
            </p>
          </div>

          {/* Call Us Directly */}
          <div className="text-center">
            <h4 className="font-display font-semibold text-primary mb-4 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              CALL US DIRECTLY
            </h4>
            <p className="text-sm text-muted-foreground mb-1">We appreciate that.</p>
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="tel:+919675624255"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                +91-9675624255 (Govind)
              </a>
              <a
                href="tel:+918875584397"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                +91-8875584397 (Prachi)
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Lakecity Designs.
            </p>
            <p className="text-sm text-muted-foreground">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
