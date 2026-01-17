import { Instagram, Shield, CreditCard } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 mx-4 mb-4 rounded-[2rem] glass-strong">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 pb-12 border-b border-border">
          <div className="flex items-center justify-center gap-3 p-4 rounded-2xl glass">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">100% Satisfaction</p>
              <p className="text-sm text-muted-foreground">Or we redo it free</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 p-4 rounded-2xl glass">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Secure Payments</p>
              <p className="text-sm text-muted-foreground">Razorpay & UPI accepted</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="text-center md:text-left">
            <a
              href="/"
              className="inline-block mb-4 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo.png" 
                alt="Lakecity Design" 
                className="h-32 w-auto mx-auto md:mx-0"
              />
            </a>
            <p className="text-sm text-muted-foreground">
              Websites that convert visitors into customers.
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-display font-semibold text-primary mb-4 flex items-center justify-center gap-2">
              <Instagram className="w-4 h-4" />
              CONNECT WITH US
            </h4>
            <p className="text-sm text-muted-foreground mb-4">Follow us on Instagram</p>
            <a
              href="https://instagram.com/lakecitydesign"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground hover:text-primary transition-colors font-medium"
            >
              <Instagram className="w-5 h-5" />
              @lakecitydesign
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Lakecity Design.
            </p>
            <p className="text-sm text-muted-foreground">
              All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Udaipur, Rajasthan, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
