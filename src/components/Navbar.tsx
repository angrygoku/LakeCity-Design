import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useContactModal } from "./ContactModalContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useContactModal();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/packages", label: "Services", isRoute: true },
    { href: "#about", label: "About", isRoute: false },
    { href: "#contact", label: "Contact", isRoute: false },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string, isRoute: boolean) => {
    if (isRoute) return;
    if (!isHomePage && href.startsWith("#")) {
      e.preventDefault();
      window.location.href = "/" + href;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="/logo.png" 
              alt="Lakecity Design" 
              className="h-20 md:h-28 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={isHomePage ? link.href : "/" + link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="default" size="default" className="rounded-full px-6" onClick={() => openModal("project")}>
              Start a Project
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={isHomePage ? link.href : "/" + link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href, link.isRoute);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Button 
                variant="default" 
                size="lg" 
                className="mt-4 rounded-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal("project");
                }}
              >
                Start a Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
