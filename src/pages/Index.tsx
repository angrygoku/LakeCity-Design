import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useContactModal } from "@/components/ContactModalContext";

import businessMockup from "@assets/generated_images/business_website_laptop_mockup.png";
import ecommerceMockup from "@assets/generated_images/e-commerce_multi-device_mockup.png";
import uiuxMockup from "@assets/generated_images/uiux_design_process_showcase.png";
import landingMockup from "@assets/generated_images/landing_page_desktop_mockup.png";
import corporateBusiness from "@assets/generated_images/corporate_business_website_imac.png";
import techStartup from "@assets/generated_images/tech_startup_website_macbook.png";
import fashionStore from "@assets/generated_images/fashion_store_iphone_laptop.png";
import dashboardUI from "@assets/generated_images/dashboard_ui_dark_mode.png";
import saasLanding from "@assets/generated_images/saas_product_landing_page.png";
import creativeAgency from "@assets/generated_images/creative_agency_portfolio.png";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1, ease: "easeOut" as const }
};

const Index = () => {
  const { openModal } = useContactModal();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <>
      <Helmet>
        <title>Lakecity Design | Web Design Studio</title>
        <meta name="description" content="Premium web design studio in Udaipur. We craft stunning websites that captivate and convert." />
        <link rel="canonical" href="https://lakecitydesign.com/" />
      </Helmet>

      <main ref={containerRef} className="min-h-screen bg-background overflow-hidden">
        <Navbar />

        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="container mx-auto px-6 lg:px-12 relative z-10 text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-8"
            >
              <span className="text-gradient">Websites</span>
              <br />
              that captivate
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            >
              <Button 
                size="xl" 
                onClick={() => openModal("project")}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
              >
                <Phone className="w-5 h-5" />
                Let's Talk
              </Button>
              <Link to="/inspiration">
                <Button variant="outline" size="xl" className="gap-2">
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="w-8 h-14 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-3">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-3 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </section>

        <section className="py-32 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div {...fadeInUp} className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold">
                <span className="text-gradient">Designs</span> that speak
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <motion.div {...scaleIn} className="group relative aspect-[4/3] rounded-3xl overflow-hidden">
                <img src={businessMockup} alt="Business Website" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white font-display font-bold text-xl">Business Websites</span>
                </div>
              </motion.div>

              <motion.div {...scaleIn} transition={{ delay: 0.1 }} className="group relative aspect-[4/3] rounded-3xl overflow-hidden">
                <img src={ecommerceMockup} alt="E-Commerce" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white font-display font-bold text-xl">E-Commerce</span>
                </div>
              </motion.div>

              <motion.div {...scaleIn} transition={{ delay: 0.2 }} className="group relative aspect-[4/3] rounded-3xl overflow-hidden">
                <img src={uiuxMockup} alt="UI/UX Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white font-display font-bold text-xl">UI/UX Design</span>
                </div>
              </motion.div>

              <motion.div {...scaleIn} transition={{ delay: 0.3 }} className="group relative aspect-[4/3] rounded-3xl overflow-hidden">
                <img src={landingMockup} alt="Landing Pages" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white font-display font-bold text-xl">Landing Pages</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <motion.div 
            initial={{ x: 0 }}
            whileInView={{ x: "-50%" }}
            viewport={{ once: true }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8">
                <img src={corporateBusiness} alt="" className="h-64 w-auto rounded-2xl" />
                <img src={techStartup} alt="" className="h-64 w-auto rounded-2xl" />
                <img src={fashionStore} alt="" className="h-64 w-auto rounded-2xl" />
                <img src={dashboardUI} alt="" className="h-64 w-auto rounded-2xl" />
                <img src={saasLanding} alt="" className="h-64 w-auto rounded-2xl" />
                <img src={creativeAgency} alt="" className="h-64 w-auto rounded-2xl" />
              </div>
            ))}
          </motion.div>
        </section>

        <section id="services" className="py-32 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div {...fadeInUp} className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                What we <span className="text-gradient">create</span>
              </h2>
            </motion.div>

            <motion.div {...staggerContainer} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { title: "Business Websites", price: "₹25k+" },
                { title: "E-Commerce", price: "₹40k+" },
                { title: "Landing Pages", price: "₹15k+" },
                { title: "UI/UX Design", price: "₹20k+" },
                { title: "SEO", price: "₹10k+" },
                { title: "Redesign", price: "₹30k+" },
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={{
                    initial: { opacity: 0, y: 40 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-500"
                >
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-primary text-lg font-semibold">{service.price}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-32 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                  Design is
                  <br />
                  <span className="text-gradient">everything</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  We craft digital experiences that turn visitors into customers.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Fast", "Beautiful", "Conversion-focused", "Mobile-first"].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div {...scaleIn} className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img src={creativeAgency} alt="Our Work" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="work" className="py-32 relative">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                <span className="text-gradient">40+</span> Inspirations
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
                Browse our complete design collection
              </p>
              <Link to="/inspiration">
                <Button size="xl" className="gap-2">
                  Explore Gallery
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
                Let's <span className="text-gradient">create</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Your next project starts with a conversation
              </p>
              <Button 
                size="xl" 
                onClick={() => openModal("project")}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Index;
