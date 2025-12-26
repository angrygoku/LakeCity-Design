import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Lakecity Designs | Wedding Stationery & Pitch Deck Design Studio in Udaipur</title>
        <meta
          name="description"
          content="Lakecity Designs creates stunning wedding stationery, pitch decks, and event printables. Fixed-price packages, delivered in under a week. Based in Udaipur, Rajasthan."
        />
        <meta
          name="keywords"
          content="wedding invitation designers udaipur, pitch deck design india, wedding stationery, event printables, affordable wedding cards, investor deck design"
        />
        <link rel="canonical" href="https://lakecitydesigns.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Testimonials />
        <HowItWorks />
        <Services />
        <Work />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
