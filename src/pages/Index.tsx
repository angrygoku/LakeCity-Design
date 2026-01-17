import { Helmet } from "react-helmet-async";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, X, ChevronLeft, ChevronRight } from "lucide-react";
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
  { title: "Business Websites", price: "₹25k+", desc: "Professional online presence" },
  { title: "E-Commerce", price: "₹40k+", desc: "Sell products online" },
  { title: "Landing Pages", price: "₹15k+", desc: "High-converting pages" },
  { title: "UI/UX Design", price: "₹20k+", desc: "Beautiful interfaces" },
  { title: "Social Media", price: "₹15k+", desc: "Manage your presence" },
  { title: "SEO", price: "₹10k+", desc: "Rank higher on Google" },
];

const Index = () => {
  const { openModal } = useContactModal();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.15], [0, 10]);

  const layer1Y = useTransform(scrollYProgress, [0.1, 0.4], [200, -100]);
  const layer1Opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.4], [0, 1, 1]);
  const layer1Scale = useTransform(scrollYProgress, [0.1, 0.25], [0.8, 1]);

  const layer2Y = useTransform(scrollYProgress, [0.25, 0.55], [200, -100]);
  const layer2Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.55], [0, 1, 1]);
  const layer2Scale = useTransform(scrollYProgress, [0.25, 0.4], [0.8, 1]);

  const layer3Y = useTransform(scrollYProgress, [0.4, 0.7], [200, -100]);
  const layer3Opacity = useTransform(scrollYProgress, [0.4, 0.55, 0.7], [0, 1, 1]);
  const layer3Scale = useTransform(scrollYProgress, [0.4, 0.55], [0.8, 1]);

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

      <main ref={containerRef} className="min-h-[800vh] bg-background">
        <Navbar />

        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
        </div>

        <motion.section 
          style={{ scale: heroScale, opacity: heroOpacity, filter: `blur(${heroBlur}px)` }}
          className="fixed inset-0 flex items-center justify-center z-10"
        >
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] mb-8"
            >
              <span className="text-gradient">Digital</span>
              <br />
              Experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto"
            >
              Websites & Social Media
            </motion.p>
          </div>
        </motion.section>

        <div className="h-[100vh]" />

        <motion.section 
          style={{ y: layer1Y, opacity: layer1Opacity, scale: layer1Scale }}
          className="sticky top-0 min-h-screen flex items-center justify-center z-20 py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl md:text-6xl font-display font-bold text-center mb-16"
            >
              <span className="text-gradient">Web</span> Design
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allDesigns.slice(0, 10).map((design, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(i)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img 
                    src={design.src} 
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-white font-medium text-sm">{design.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <div className="h-[50vh]" />

        <motion.section 
          style={{ y: layer2Y, opacity: layer2Opacity, scale: layer2Scale }}
          className="sticky top-0 min-h-screen flex items-center justify-center z-30 py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl md:text-6xl font-display font-bold text-center mb-16"
            >
              <span className="text-gradient">E-Commerce</span> Solutions
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allDesigns.slice(10, 20).map((design, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(i + 10)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img 
                    src={design.src} 
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-white font-medium text-sm">{design.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <div className="h-[50vh]" />

        <motion.section 
          style={{ y: layer3Y, opacity: layer3Opacity, scale: layer3Scale }}
          className="sticky top-0 min-h-screen flex items-center justify-center z-40 py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl md:text-6xl font-display font-bold text-center mb-16"
            >
              <span className="text-gradient">Social Media</span> Management
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allDesigns.slice(20, 40).map((design, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(i + 20)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img 
                    src={design.src} 
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-white font-medium text-sm">{design.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <div className="h-[100vh]" />

        <section className="relative z-50 bg-background py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                Our <span className="text-gradient">Services</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-500"
                >
                  <h3 className="text-lg md:text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-primary text-xl font-semibold mb-2">{service.price}</p>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-50 bg-background py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
                Let's <span className="text-gradient">Create</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
                Your next project starts with a conversation
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="xl" 
                  onClick={() => openModal("project")}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Us
                </Button>
                <a href="tel:+919675624255">
                  <Button variant="outline" size="xl" className="gap-2">
                    Call Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="relative z-50 bg-background">
          <Footer />
        </div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5, x: "50vw" }}
                animate={{ scale: 1, x: 0 }}
                exit={{ scale: 0.5, x: "-50vw" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-6xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={allDesigns[selectedImage].src}
                  alt={allDesigns[selectedImage].title}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <h3 className="text-white text-2xl font-display font-bold">
                    {allDesigns[selectedImage].title}
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                      className="bg-white/10 border-white/20 hover:bg-white/20"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                      className="bg-white/10 border-white/20 hover:bg-white/20"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:bg-white/10"
                >
                  <X className="w-6 h-6" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Index;
