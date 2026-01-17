import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Award, Users, Clock, Shield, Globe, ShoppingCart, Palette, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useContactModal } from "@/components/ContactModalContext";

import bgGeometric from "@assets/generated_images/abstract_geometric_background_cream.png";
import bgWaves from "@assets/generated_images/abstract_waves_coral_peach.png";

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Award },
  { value: "100%", label: "Client Satisfaction", icon: Users },
  { value: "7 Days", label: "Average Delivery", icon: Clock },
  { value: "24/7", label: "Support Available", icon: Shield },
];

const services = [
  { title: "Business Websites", desc: "Professional online presence", icon: Globe },
  { title: "E-Commerce", desc: "Sell products online", icon: ShoppingCart },
  { title: "Landing Pages", desc: "High-converting pages", icon: Zap },
  { title: "UI/UX Design", desc: "Beautiful interfaces", icon: Palette },
  { title: "Social Media", desc: "Manage your presence", icon: Users },
  { title: "SEO", desc: "Rank higher on Google", icon: TrendingUp },
];

const features = [
  { title: "Premium Quality", desc: "Every pixel crafted to perfection with attention to detail" },
  { title: "Fixed Pricing", desc: "No hidden costs or surprises, transparent quotes upfront" },
  { title: "Fast Turnaround", desc: "Get your project delivered within days, not months" },
  { title: "Full Ownership", desc: "Complete source files and rights transferred to you" },
];

const Index = () => {
  const { openModal } = useContactModal();
  
  const { scrollYProgress } = useScroll();
  
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <>
      <Helmet>
        <title>Lakecity Design | Web Design & Social Media Studio in Udaipur</title>
        <meta name="description" content="Premium web design and social media management studio in Udaipur. We craft stunning digital experiences for ambitious brands." />
        <link rel="canonical" href="https://lakecitydesign.com/" />
      </Helmet>

      <main className="min-h-[500vh] bg-background relative overflow-x-hidden">
        <Navbar />

        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <img 
            src={bgGeometric} 
            alt="" 
            className="absolute top-0 right-0 w-[60%] h-auto opacity-30"
          />
          <img 
            src={bgWaves} 
            alt="" 
            className="absolute bottom-0 left-0 w-[70%] h-auto opacity-25"
          />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <motion.section 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="fixed inset-0 flex items-center justify-center z-10"
        >
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-full glass"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Web Design Studio in Udaipur</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold leading-[0.85] mb-8"
            >
              <span className="text-gradient">Digital</span>
              <br />
              <span className="text-foreground/90">Experiences</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              Premium websites & social media management for ambitious brands
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="xl" onClick={() => openModal("project")} className="gap-2 rounded-full">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="xl" variant="outline" asChild className="rounded-full">
                <Link to="/packages">Explore Services</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <div className="h-[110vh]" />

        <section className="relative z-20 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 md:p-6 rounded-2xl glass text-center cursor-default hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-300"
                >
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-primary mx-auto mb-2 md:mb-3" />
                  <div className="text-xl md:text-3xl font-display font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-[10px] md:text-xs leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[10vh]" />

        <section className="relative z-20 py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass text-primary text-xs md:text-sm font-medium mb-3 md:mb-6">What We Do</span>
              <h2 className="text-3xl md:text-7xl font-display font-bold mb-4 md:mb-6">
                Crafting <span className="text-gradient">Digital Excellence</span>
              </h2>
              <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                From stunning websites to engaging social media presence, we bring your brand to life
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group p-4 md:p-8 rounded-2xl glass cursor-default hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-300"
                >
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-base md:text-xl font-display font-bold mb-1 md:mb-2 group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-tight">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10 md:mt-16">
              <Button size="lg" variant="outline" asChild className="rounded-full gap-2">
                <Link to="/packages">
                  View All Packages & Pricing <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="h-[10vh]" />

        <section className="relative z-20 py-10 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-4 md:p-6 rounded-xl md:rounded-2xl glass hover:-translate-y-1 transition-transform duration-300"
                >
                  <h4 className="text-sm md:text-lg font-display font-bold text-primary mb-1 md:mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-xs md:text-sm leading-tight">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[10vh]" />

        <section id="about" className="relative z-20 bg-background py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">About Us</span>
                <h2 className="text-2xl md:text-6xl font-display font-bold mb-4 md:mb-6">
                  We craft <span className="text-gradient">digital excellence</span>
                </h2>
                <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8">
                  Based in Udaipur, we help businesses across India establish stunning digital presence that drives results. Our team combines creativity with technical expertise to deliver websites and social media solutions that truly stand out.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["Fast Delivery", "Premium Quality", "Ongoing Support", "Fixed Pricing", "Full Ownership", "SEO Ready"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 md:px-4 md:py-2 rounded-full glass font-medium text-xs md:text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="p-4 md:p-8 rounded-2xl glass-strong text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-3xl md:text-5xl font-display font-bold text-primary mb-1 md:mb-2">50+</div>
                  <div className="text-muted-foreground text-xs md:text-base">Projects</div>
                </div>
                <div className="p-4 md:p-8 rounded-2xl glass text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-3xl md:text-5xl font-display font-bold text-primary mb-1 md:mb-2">100%</div>
                  <div className="text-muted-foreground text-xs md:text-base">Satisfaction</div>
                </div>
                <div className="p-4 md:p-8 rounded-2xl glass text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-3xl md:text-5xl font-display font-bold text-primary mb-1 md:mb-2">₹15k</div>
                  <div className="text-muted-foreground text-xs md:text-base">Starting Price</div>
                </div>
                <div className="p-4 md:p-8 rounded-2xl glass-strong text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-3xl md:text-5xl font-display font-bold text-primary mb-1 md:mb-2">24/7</div>
                  <div className="text-muted-foreground text-xs md:text-base">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-[10vh]" />

        <section id="contact" className="relative z-20 bg-background py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-4 lg:px-12 text-center relative z-10">
            <div>
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">Get Started</span>
              <h2 className="text-3xl md:text-8xl font-display font-bold mb-4 md:mb-8">
                Let's <span className="text-gradient">Create</span>
              </h2>
              <p className="text-sm md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-xl mx-auto px-4">
                Your next project starts with a conversation. Reach out and let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Button 
                  size="lg" 
                  onClick={() => openModal("project")}
                  className="gap-2 rounded-full w-full sm:w-auto"
                >
                  Start a Project <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
                <Button size="lg" variant="outline" asChild className="gap-2 rounded-full w-full sm:w-auto">
                  <Link to="/packages">View Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Index;
