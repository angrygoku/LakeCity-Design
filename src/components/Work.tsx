import { Globe, Palette, ShoppingCart, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "./ContactModalContext";

import businessMockup from "@assets/generated_images/business_website_laptop_mockup.png";
import ecommerceMockup from "@assets/generated_images/e-commerce_multi-device_mockup.png";
import uiuxMockup from "@assets/generated_images/uiux_design_process_showcase.png";
import landingMockup from "@assets/generated_images/landing_page_desktop_mockup.png";

const portfolio = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Modern, responsive websites that establish credibility and convert visitors into customers.",
    image: businessMockup,
    tags: ["React", "Tailwind CSS", "SEO Optimized"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    description: "Full-featured online stores with secure payments, inventory management, and mobile-first design.",
    image: ecommerceMockup,
    tags: ["Shopify", "WooCommerce", "Payment Integration"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful interfaces crafted from wireframes to high-fidelity mockups with complete design systems.",
    image: uiuxMockup,
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: Smartphone,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive campaign success.",
    image: landingMockup,
    tags: ["Conversion Optimized", "A/B Testing", "Fast Loading"],
  },
];

const Work = () => {
  const { openModal } = useContactModal();

  return (
    <section id="work" className="py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Projects that <span className="text-gradient">deliver results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to launch, we create digital experiences that help businesses grow and succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {portfolio.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} mockup`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 bg-gradient-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold">{item.title}</h3>
                </div>

                <p className="text-muted-foreground mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-8 rounded-2xl bg-gradient-card border border-border">
          <h3 className="text-2xl font-display font-bold mb-3">
            Ready to start your project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss your vision and create something amazing together. 
            Get a free consultation and project estimate.
          </p>
          <Button variant="default" size="lg" onClick={() => openModal("project")}>
            Start Your Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;
