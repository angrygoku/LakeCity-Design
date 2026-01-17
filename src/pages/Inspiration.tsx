import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import corporateBusiness from "@assets/generated_images/corporate_business_website_imac.png";
import techStartup from "@assets/generated_images/tech_startup_website_macbook.png";
import lawFirm from "@assets/generated_images/law_firm_website_elegant.png";
import restaurant from "@assets/generated_images/restaurant_website_devices.png";
import realEstate from "@assets/generated_images/real_estate_website_desktop.png";
import medicalClinic from "@assets/generated_images/medical_clinic_website_laptop.png";
import creativeAgency from "@assets/generated_images/creative_agency_portfolio.png";
import fitnessGym from "@assets/generated_images/fitness_gym_website_devices.png";
import education from "@assets/generated_images/education_website_desktop.png";
import consulting from "@assets/generated_images/consulting_firm_macbook.png";

import fashionStore from "@assets/generated_images/fashion_store_iphone_laptop.png";
import electronicsStore from "@assets/generated_images/electronics_store_desktop.png";
import organicFood from "@assets/generated_images/organic_food_marketplace_tablet.png";
import jewelryBoutique from "@assets/generated_images/jewelry_boutique_e-commerce.png";
import sportsEquipment from "@assets/generated_images/sports_equipment_store_laptop.png";
import homeDecor from "@assets/generated_images/home_decor_store_imac.png";
import beautyCosmetics from "@assets/generated_images/beauty_cosmetics_store.png";
import bookstore from "@assets/generated_images/bookstore_online_tablet.png";
import petSupplies from "@assets/generated_images/pet_supplies_e-commerce_laptop.png";
import artisanCraft from "@assets/generated_images/artisan_craft_marketplace.png";

import mobileAppUI from "@assets/generated_images/mobile_app_ui_design_process.png";
import dashboardUI from "@assets/generated_images/dashboard_ui_dark_mode.png";
import ecommerceUI from "@assets/generated_images/e-commerce_app_ui_kit.png";
import bankingUI from "@assets/generated_images/banking_fintech_app_ui.png";
import socialMediaUI from "@assets/generated_images/social_media_app_ui.png";
import healthcareUI from "@assets/generated_images/healthcare_medical_app_ui.png";
import foodDeliveryUI from "@assets/generated_images/food_delivery_app_ui.png";
import fitnessUI from "@assets/generated_images/fitness_workout_app_ui.png";
import travelUI from "@assets/generated_images/travel_booking_app_ui.png";
import musicUI from "@assets/generated_images/music_streaming_app_ui.png";

import saasLanding from "@assets/generated_images/saas_product_landing_page.png";
import appLaunch from "@assets/generated_images/mobile_app_launch_landing.png";
import eventConference from "@assets/generated_images/event_conference_landing_page.png";
import onlineCourse from "@assets/generated_images/online_course_landing_page.png";
import webinarLanding from "@assets/generated_images/webinar_registration_landing.png";
import productLaunch from "@assets/generated_images/product_launch_landing_page.png";
import newsletterLanding from "@assets/generated_images/newsletter_subscription_landing.png";
import agencyLanding from "@assets/generated_images/agency_services_landing_page.png";
import ebookLanding from "@assets/generated_images/ebook_download_landing_page.png";
import startupLanding from "@assets/generated_images/startup_fundraising_landing.png";

const categories = [
  { id: "all", label: "All Designs" },
  { id: "websites", label: "Business Websites" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "uiux", label: "UI/UX Design" },
  { id: "landing", label: "Landing Pages" },
];

const designs = [
  { id: 1, src: corporateBusiness, title: "Corporate Business", category: "websites" },
  { id: 2, src: techStartup, title: "Tech Startup", category: "websites" },
  { id: 3, src: lawFirm, title: "Law Firm", category: "websites" },
  { id: 4, src: restaurant, title: "Restaurant", category: "websites" },
  { id: 5, src: realEstate, title: "Real Estate", category: "websites" },
  { id: 6, src: medicalClinic, title: "Medical Clinic", category: "websites" },
  { id: 7, src: creativeAgency, title: "Creative Agency", category: "websites" },
  { id: 8, src: fitnessGym, title: "Fitness Gym", category: "websites" },
  { id: 9, src: education, title: "Education", category: "websites" },
  { id: 10, src: consulting, title: "Consulting Firm", category: "websites" },
  
  { id: 11, src: fashionStore, title: "Fashion Store", category: "ecommerce" },
  { id: 12, src: electronicsStore, title: "Electronics Store", category: "ecommerce" },
  { id: 13, src: organicFood, title: "Organic Food", category: "ecommerce" },
  { id: 14, src: jewelryBoutique, title: "Jewelry Boutique", category: "ecommerce" },
  { id: 15, src: sportsEquipment, title: "Sports Equipment", category: "ecommerce" },
  { id: 16, src: homeDecor, title: "Home Decor", category: "ecommerce" },
  { id: 17, src: beautyCosmetics, title: "Beauty Cosmetics", category: "ecommerce" },
  { id: 18, src: bookstore, title: "Bookstore", category: "ecommerce" },
  { id: 19, src: petSupplies, title: "Pet Supplies", category: "ecommerce" },
  { id: 20, src: artisanCraft, title: "Artisan Craft", category: "ecommerce" },
  
  { id: 21, src: mobileAppUI, title: "Mobile App Design", category: "uiux" },
  { id: 22, src: dashboardUI, title: "Dashboard UI", category: "uiux" },
  { id: 23, src: ecommerceUI, title: "E-Commerce UI Kit", category: "uiux" },
  { id: 24, src: bankingUI, title: "Banking App", category: "uiux" },
  { id: 25, src: socialMediaUI, title: "Social Media App", category: "uiux" },
  { id: 26, src: healthcareUI, title: "Healthcare App", category: "uiux" },
  { id: 27, src: foodDeliveryUI, title: "Food Delivery App", category: "uiux" },
  { id: 28, src: fitnessUI, title: "Fitness App", category: "uiux" },
  { id: 29, src: travelUI, title: "Travel App", category: "uiux" },
  { id: 30, src: musicUI, title: "Music App", category: "uiux" },
  
  { id: 31, src: saasLanding, title: "SaaS Product", category: "landing" },
  { id: 32, src: appLaunch, title: "App Launch", category: "landing" },
  { id: 33, src: eventConference, title: "Event Conference", category: "landing" },
  { id: 34, src: onlineCourse, title: "Online Course", category: "landing" },
  { id: 35, src: webinarLanding, title: "Webinar Registration", category: "landing" },
  { id: 36, src: productLaunch, title: "Product Launch", category: "landing" },
  { id: 37, src: newsletterLanding, title: "Newsletter", category: "landing" },
  { id: 38, src: agencyLanding, title: "Agency Services", category: "landing" },
  { id: 39, src: ebookLanding, title: "Ebook Download", category: "landing" },
  { id: 40, src: startupLanding, title: "Startup Fundraising", category: "landing" },
];

const Inspiration = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof designs[0] | null>(null);

  const filteredDesigns = activeCategory === "all" 
    ? designs 
    : designs.filter(d => d.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Design Inspiration | Lakecity Design</title>
        <meta name="description" content="Browse 40+ stunning design mockups for websites, e-commerce stores, UI/UX designs, and landing pages. Get inspired for your next project." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <Link to="/">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Design <span className="text-gradient">Inspiration</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our collection of 40+ design concepts. Each design represents what's possible 
              when creativity meets purpose. Find inspiration for your next project.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDesigns.map((design) => (
              <div
                key={design.id}
                onClick={() => setSelectedImage(design)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={design.src}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-display font-semibold">{design.title}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{design.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-card border border-border">
            <h2 className="text-2xl font-display font-bold mb-3">
              Like what you see?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let's create something unique for your business. Every project starts with understanding your vision.
            </p>
            <Link to="/#contact">
              <Button variant="default" size="lg">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Inspiration;
