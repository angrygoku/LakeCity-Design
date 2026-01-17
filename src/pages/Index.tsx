import { Helmet } from "react-helmet-async";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, X, ChevronLeft, ChevronRight, Globe, ShoppingCart, Palette, TrendingUp, Users, Zap, Award, Clock, Shield, Sparkles } from "lucide-react";
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
import fitnessGym from "@assets/generated_images/fitness_gym_website_devices.png";
import medicalClinic from "@assets/generated_images/medical_clinic_website_laptop.png";
import lawFirm from "@assets/generated_images/law_firm_website_elegant.png";
import educationWebsite from "@assets/generated_images/education_website_desktop.png";
import consultingFirm from "@assets/generated_images/consulting_firm_macbook.png";
import homeDecor from "@assets/generated_images/home_decor_store_imac.png";
import beautyStore from "@assets/generated_images/beauty_cosmetics_store.png";
import jewelryBoutique from "@assets/generated_images/jewelry_boutique_e-commerce.png";
import organicFood from "@assets/generated_images/organic_food_marketplace_tablet.png";
import petSupplies from "@assets/generated_images/pet_supplies_e-commerce_laptop.png";

import socialDashboard from "@assets/generated_images/social_media_dashboard_macbook.png";
import contentCalendar from "@assets/generated_images/content_calendar_imac_mockup.png";
import instagramFeed from "@assets/generated_images/instagram_feed_iphone_mockup.png";
import socialAnalytics from "@assets/generated_images/social_analytics_tablet_view.png";
import multiPlatform from "@assets/generated_images/multi-platform_social_management.png";
import tiktokStudio from "@assets/generated_images/tiktok_creator_studio_mockup.png";
import influencerMarketing from "@assets/generated_images/influencer_marketing_platform.png";
import linkedinDashboard from "@assets/generated_images/linkedin_business_dashboard.png";
import postDesigner from "@assets/generated_images/post_designer_tool_interface.png";
import youtubeAnalytics from "@assets/generated_images/youtube_analytics_dashboard.png";
import hashtagResearch from "@assets/generated_images/hashtag_research_tool_ui.png";
import communityInbox from "@assets/generated_images/community_inbox_dashboard.png";
import brandMonitoring from "@assets/generated_images/brand_monitoring_dashboard.png";
import reelsCreation from "@assets/generated_images/reels_creation_studio.png";
import socialRoi from "@assets/generated_images/social_roi_calculator.png";
import facebookAds from "@assets/generated_images/facebook_ads_manager_mockup.png";
import pinterestAnalytics from "@assets/generated_images/pinterest_analytics_dashboard.png";
import aiContentGenerator from "@assets/generated_images/ai_content_generator_tool.png";
import teamWorkspace from "@assets/generated_images/team_collaboration_workspace.png";
import agencyDashboard from "@assets/generated_images/agency_client_dashboard.png";

import bgGeometric from "@assets/generated_images/abstract_geometric_background_cream.png";
import bgWaves from "@assets/generated_images/abstract_waves_coral_peach.png";

const serviceInclusions = {
  website: [
    { feature: "Custom Design", basic: true, premium: true, enterprise: true },
    { feature: "Responsive Layout", basic: true, premium: true, enterprise: true },
    { feature: "Contact Form", basic: true, premium: true, enterprise: true },
    { feature: "SEO Setup", basic: false, premium: true, enterprise: true },
    { feature: "Blog Integration", basic: false, premium: true, enterprise: true },
    { feature: "Analytics Dashboard", basic: false, premium: true, enterprise: true },
    { feature: "Priority Support", basic: false, premium: false, enterprise: true },
    { feature: "Custom Features", basic: false, premium: false, enterprise: true },
  ],
  ecommerce: [
    { feature: "Product Catalog", basic: true, premium: true, enterprise: true },
    { feature: "Payment Gateway", basic: true, premium: true, enterprise: true },
    { feature: "Order Management", basic: true, premium: true, enterprise: true },
    { feature: "Inventory Tracking", basic: false, premium: true, enterprise: true },
    { feature: "Discount Coupons", basic: false, premium: true, enterprise: true },
    { feature: "Multi-Currency", basic: false, premium: false, enterprise: true },
    { feature: "Custom Checkout", basic: false, premium: false, enterprise: true },
    { feature: "API Integration", basic: false, premium: false, enterprise: true },
  ],
  social: [
    { feature: "Content Calendar", basic: true, premium: true, enterprise: true },
    { feature: "3 Platforms", basic: true, premium: false, enterprise: false },
    { feature: "5 Platforms", basic: false, premium: true, enterprise: false },
    { feature: "Unlimited Platforms", basic: false, premium: false, enterprise: true },
    { feature: "Monthly Reports", basic: true, premium: true, enterprise: true },
    { feature: "Story Creation", basic: false, premium: true, enterprise: true },
    { feature: "Paid Ads Management", basic: false, premium: false, enterprise: true },
    { feature: "Influencer Outreach", basic: false, premium: false, enterprise: true },
  ],
};

const allDesigns = [
  { src: businessMockup, title: "Business Websites", category: "web" },
  { src: ecommerceMockup, title: "E-Commerce", category: "web" },
  { src: uiuxMockup, title: "UI/UX Design", category: "web" },
  { src: landingMockup, title: "Landing Pages", category: "web" },
  { src: corporateBusiness, title: "Corporate", category: "web" },
  { src: techStartup, title: "Tech Startup", category: "web" },
  { src: fashionStore, title: "Fashion Store", category: "web" },
  { src: dashboardUI, title: "Dashboard UI", category: "web" },
  { src: saasLanding, title: "SaaS Landing", category: "web" },
  { src: creativeAgency, title: "Creative Agency", category: "web" },
  { src: fitnessGym, title: "Fitness & Gym", category: "web" },
  { src: medicalClinic, title: "Medical Clinic", category: "web" },
  { src: lawFirm, title: "Law Firm", category: "web" },
  { src: educationWebsite, title: "Education", category: "web" },
  { src: consultingFirm, title: "Consulting", category: "web" },
  { src: homeDecor, title: "Home Decor", category: "ecommerce" },
  { src: beautyStore, title: "Beauty Store", category: "ecommerce" },
  { src: jewelryBoutique, title: "Jewelry", category: "ecommerce" },
  { src: organicFood, title: "Organic Food", category: "ecommerce" },
  { src: petSupplies, title: "Pet Supplies", category: "ecommerce" },
  { src: socialDashboard, title: "Social Dashboard", category: "social" },
  { src: contentCalendar, title: "Content Calendar", category: "social" },
  { src: instagramFeed, title: "Instagram Feed", category: "social" },
  { src: socialAnalytics, title: "Analytics", category: "social" },
  { src: multiPlatform, title: "Multi-Platform", category: "social" },
  { src: tiktokStudio, title: "TikTok Studio", category: "social" },
  { src: influencerMarketing, title: "Influencer Marketing", category: "social" },
  { src: linkedinDashboard, title: "LinkedIn", category: "social" },
  { src: postDesigner, title: "Post Designer", category: "social" },
  { src: youtubeAnalytics, title: "YouTube Analytics", category: "social" },
  { src: hashtagResearch, title: "Hashtag Research", category: "social" },
  { src: communityInbox, title: "Community Inbox", category: "social" },
  { src: brandMonitoring, title: "Brand Monitoring", category: "social" },
  { src: reelsCreation, title: "Reels Creation", category: "social" },
  { src: socialRoi, title: "Social ROI", category: "social" },
  { src: facebookAds, title: "Facebook Ads", category: "social" },
  { src: pinterestAnalytics, title: "Pinterest", category: "social" },
  { src: aiContentGenerator, title: "AI Content", category: "social" },
  { src: teamWorkspace, title: "Team Workspace", category: "social" },
  { src: agencyDashboard, title: "Agency Dashboard", category: "social" },
];

const services = [
  { title: "Business Websites", price: "₹25k+", desc: "Professional online presence", icon: Globe },
  { title: "E-Commerce", price: "₹40k+", desc: "Sell products online", icon: ShoppingCart },
  { title: "Landing Pages", price: "₹15k+", desc: "High-converting pages", icon: Zap },
  { title: "UI/UX Design", price: "₹20k+", desc: "Beautiful interfaces", icon: Palette },
  { title: "Social Media", price: "₹15k+", desc: "Manage your presence", icon: Users },
  { title: "SEO", price: "₹10k+", desc: "Rank higher on Google", icon: TrendingUp },
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Award },
  { value: "100%", label: "Client Satisfaction", icon: Users },
  { value: "7 Days", label: "Average Delivery", icon: Clock },
  { value: "24/7", label: "WhatsApp Support", icon: Shield },
];

const features = [
  { title: "Premium Quality", desc: "Every pixel crafted to perfection with attention to detail" },
  { title: "Fixed Pricing", desc: "No hidden costs or surprises, transparent quotes upfront" },
  { title: "Fast Turnaround", desc: "Get your project delivered within days, not months" },
  { title: "Full Ownership", desc: "Complete source files and rights transferred to you" },
];

const Index = () => {
  const { openModal } = useContactModal();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const heroScale = useTransform(scrollYProgress, [0, 0.08], [1, 0.85]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.08], [0, 15]);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? allDesigns.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === allDesigns.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Lakecity Design | Web Design & Social Media Studio</title>
        <meta name="description" content="Premium web design and social media management studio in Udaipur. We craft stunning digital experiences." />
        <link rel="canonical" href="https://lakecitydesign.com/" />
      </Helmet>

      <main ref={containerRef} className="min-h-[1400vh] bg-background relative">
        <Navbar />

        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <motion.img 
            src={bgGeometric} 
            alt="" 
            className="absolute top-0 right-0 w-[60%] h-auto opacity-30"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.img 
            src={bgWaves} 
            alt="" 
            className="absolute bottom-0 left-0 w-[70%] h-auto opacity-25"
            animate={{ 
              x: [0, 20, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <motion.section 
          style={{ scale: heroScale, opacity: heroOpacity, filter: `blur(${heroBlur}px)` }}
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
                <a href="#work">View Our Work</a>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <div className="h-[110vh]" />

        <section className="relative z-20 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-5 md:p-6 rounded-[1.5rem] glass text-center"
                >
                  <stat.icon className="w-7 h-7 text-primary mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[10vh]" />

        <section id="work" className="relative z-20 py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10"
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">Our Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                <span className="text-gradient">Web</span> Design
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stunning websites that convert visitors into customers
              </p>
            </motion.div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {allDesigns.slice(0, 10).map((design, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(i)}
                  className="group relative aspect-square rounded-[1.25rem] overflow-hidden cursor-pointer glass hover:scale-[1.02] transition-all duration-500"
                >
                  <img 
                    src={design.src} 
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-white font-semibold text-sm">{design.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[8vh]" />

        <section className="relative z-20 py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-8 md:p-12 rounded-[2rem] glass-strong"
              >
                <Globe className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Business Websites</h3>
                <p className="text-muted-foreground mb-6">Professional online presence that builds trust and converts visitors into customers.</p>
                <div className="text-4xl font-display font-bold text-primary">₹25,000+</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-8 md:p-12 rounded-[2rem] glass"
              >
                <Zap className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Landing Pages</h3>
                <p className="text-muted-foreground mb-6">High-converting pages designed to capture leads and drive sales.</p>
                <div className="text-4xl font-display font-bold text-primary">₹15,000+</div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-[10vh]" />

        <section className="relative z-20 py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Online Stores</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                <span className="text-gradient">E-Commerce</span> Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Beautiful online stores that make selling effortless
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {allDesigns.slice(10, 20).map((design, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(i + 10)}
                  className="group relative aspect-square rounded-[1.25rem] overflow-hidden cursor-pointer glass hover:scale-[1.02] transition-all duration-500"
                >
                  <img 
                    src={design.src} 
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-white font-semibold text-sm">{design.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[8vh]" />

        <section className="relative z-20 py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-16 rounded-[2rem] glass-strong text-center"
            >
              <ShoppingCart className="w-16 h-16 text-primary mx-auto mb-8" />
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">E-Commerce Stores</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Complete online store setup with payment integration, inventory management, and mobile-first design.
              </p>
              <div className="text-5xl font-display font-bold text-primary mb-8">₹40,000+</div>
              <div className="flex flex-wrap justify-center gap-4">
                {["Razorpay", "UPI", "Shopify", "WooCommerce", "Custom Build"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full glass text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <div className="h-[10vh]" />

        <section className="relative z-20 py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Brand Growth</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                <span className="text-gradient">Social Media</span> Management
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Grow your brand presence across all platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {allDesigns.slice(20, 40).map((design, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(i + 20)}
                  className="group relative aspect-square rounded-[1.25rem] overflow-hidden cursor-pointer glass hover:scale-[1.02] transition-all duration-500"
                >
                  <img 
                    src={design.src} 
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-white font-semibold text-sm">{design.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[8vh]" />

        <section className="relative z-20 py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-[2rem] glass"
              >
                <Users className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-display font-bold mb-2">Social Media</h4>
                <p className="text-muted-foreground text-sm mb-4">Complete presence management</p>
                <div className="text-2xl font-display font-bold text-primary">₹15,000+/mo</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 rounded-[2rem] glass"
              >
                <Palette className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-display font-bold mb-2">UI/UX Design</h4>
                <p className="text-muted-foreground text-sm mb-4">Beautiful user interfaces</p>
                <div className="text-2xl font-display font-bold text-primary">₹20,000+</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 rounded-[2rem] glass"
              >
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-display font-bold mb-2">SEO Optimization</h4>
                <p className="text-muted-foreground text-sm mb-4">Rank higher on Google</p>
                <div className="text-2xl font-display font-bold text-primary">₹10,000+</div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-[10vh]" />

        <section id="services" className="relative z-30 bg-background py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Pricing</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                All <span className="text-gradient">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transparent, fixed pricing with no hidden costs
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group p-6 md:p-10 rounded-[2rem] glass hover:scale-[1.02] transition-all duration-500"
                >
                  <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-primary text-2xl md:text-3xl font-bold mb-3">{service.price}</p>
                  <p className="text-muted-foreground">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[8vh]" />

        <section className="relative z-30 py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">What's Included</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Website <span className="text-gradient">Packages</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-x-auto"
            >
              <table className="w-full glass rounded-[1.5rem] overflow-hidden">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 md:p-6 text-left font-display font-bold text-foreground">Feature</th>
                    <th className="p-4 md:p-6 text-center font-display font-bold text-foreground">
                      <div>Basic</div>
                      <div className="text-primary text-sm font-normal">₹25k</div>
                    </th>
                    <th className="p-4 md:p-6 text-center font-display font-bold text-primary bg-primary/5">
                      <div>Premium</div>
                      <div className="text-primary text-sm font-normal">₹45k</div>
                    </th>
                    <th className="p-4 md:p-6 text-center font-display font-bold text-foreground">
                      <div>Enterprise</div>
                      <div className="text-primary text-sm font-normal">₹75k+</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {serviceInclusions.website.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="p-4 md:p-6 text-muted-foreground">{row.feature}</td>
                      <td className="p-4 md:p-6 text-center">{row.basic ? <span className="text-primary text-xl">✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                      <td className="p-4 md:p-6 text-center bg-primary/5">{row.premium ? <span className="text-primary text-xl">✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                      <td className="p-4 md:p-6 text-center">{row.enterprise ? <span className="text-primary text-xl">✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        <div className="h-[10vh]" />

        <section className="relative z-30 py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                E-Commerce <span className="text-gradient">Packages</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-x-auto"
            >
              <table className="w-full glass rounded-[1.5rem] overflow-hidden">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 md:p-6 text-left font-display font-bold text-foreground">Feature</th>
                    <th className="p-4 md:p-6 text-center font-display font-bold text-foreground">
                      <div>Starter</div>
                      <div className="text-primary text-sm font-normal">₹40k</div>
                    </th>
                    <th className="p-4 md:p-6 text-center font-display font-bold text-primary bg-primary/5">
                      <div>Growth</div>
                      <div className="text-primary text-sm font-normal">₹70k</div>
                    </th>
                    <th className="p-4 md:p-6 text-center font-display font-bold text-foreground">
                      <div>Scale</div>
                      <div className="text-primary text-sm font-normal">₹1.2L+</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {serviceInclusions.ecommerce.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="p-4 md:p-6 text-muted-foreground">{row.feature}</td>
                      <td className="p-4 md:p-6 text-center">{row.basic ? <span className="text-primary text-xl">✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                      <td className="p-4 md:p-6 text-center bg-primary/5">{row.premium ? <span className="text-primary text-xl">✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                      <td className="p-4 md:p-6 text-center">{row.enterprise ? <span className="text-primary text-xl">✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        <div className="h-[10vh]" />

        <section className="relative z-30 py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Social Media <span className="text-gradient">Packages</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-x-auto"
            >
              <table className="w-full glass rounded-[1.5rem] overflow-hidden">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 md:p-6 text-left font-display font-bold text-foreground">Feature</th>
                    <th className="p-4 md:p-6 text-center font-display font-bold text-foreground">
                      <div>Essential</div>
                      <div className="text-primary text-sm font-normal">₹15k/mo</div>
                    </th>
                    <th className="p-4 md:p-6 text-center font-display font-bold text-primary bg-primary/5">
                      <div>Professional</div>
                      <div className="text-primary text-sm font-normal">₹30k/mo</div>
                    </th>
                    <th className="p-4 md:p-6 text-center font-display font-bold text-foreground">
                      <div>Agency</div>
                      <div className="text-primary text-sm font-normal">₹50k+/mo</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {serviceInclusions.social.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="p-4 md:p-6 text-muted-foreground">{row.feature}</td>
                      <td className="p-4 md:p-6 text-center">{row.basic ? <span className="text-primary text-xl">✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                      <td className="p-4 md:p-6 text-center bg-primary/5">{row.premium ? <span className="text-primary text-xl">✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                      <td className="p-4 md:p-6 text-center">{row.enterprise ? <span className="text-primary text-xl">✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        <div className="h-[8vh]" />

        <section className="relative z-30 py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-[1.5rem] glass"
                >
                  <h4 className="text-lg font-display font-bold text-primary mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[8vh]" />

        <section id="about" className="relative z-30 bg-background py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">About Us</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                  We craft <span className="text-gradient">digital excellence</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Based in Udaipur, we help businesses across India establish stunning digital presence that drives results. Our team combines creativity with technical expertise to deliver websites that not only look beautiful but perform exceptionally.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Fast Delivery", "Premium Quality", "Ongoing Support", "Fixed Pricing", "Full Ownership", "SEO Ready"].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full glass font-medium text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="p-8 rounded-[2rem] glass-strong text-center">
                  <div className="text-5xl font-display font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="p-8 rounded-[2rem] glass text-center">
                  <div className="text-5xl font-display font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="p-8 rounded-[2rem] glass text-center">
                  <div className="text-5xl font-display font-bold text-primary mb-2">₹15k</div>
                  <div className="text-muted-foreground">Starting Price</div>
                </div>
                <div className="p-8 rounded-[2rem] glass-strong text-center">
                  <div className="text-5xl font-display font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">WhatsApp Support</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-[8vh]" />

        <section id="contact" className="relative z-30 bg-background py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">Get Started</span>
              <h2 className="text-5xl md:text-8xl font-display font-bold mb-8">
                Let's <span className="text-gradient">Create</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
                Your next project starts with a conversation. Reach out and let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="xl" 
                  onClick={() => openModal("project")}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 rounded-full"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Us
                </Button>
                <Button size="xl" variant="outline" onClick={() => openModal("project")} className="gap-2 rounded-full">
                  Start a Project <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
              <div className="mt-12 flex flex-col items-center gap-2 text-muted-foreground">
                <p>+91-9675624255</p>
                <p>+91-8875584397</p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.5, opacity: 0, x: "50vw" }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ scale: 0.5, opacity: 0, x: "-50vw" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full"
              >
                <img 
                  src={allDesigns[selectedImage].src} 
                  alt={allDesigns[selectedImage].title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl">
                  <h3 className="text-2xl font-display font-bold text-white">
                    {allDesigns[selectedImage].title}
                  </h3>
                  <p className="text-white/70 mt-1">
                    {selectedImage + 1} / {allDesigns.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Index;
