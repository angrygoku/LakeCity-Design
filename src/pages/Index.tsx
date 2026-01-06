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
        <title>Lakecity Design | Web Design & Development Studio in Udaipur</title>
        <meta
          name="description"
          content="Lakecity Design builds stunning websites that convert visitors into customers. Fixed-price packages, delivered in under 2 weeks. Based in Udaipur, Rajasthan."
        />
        <meta
          name="keywords"
          content="web design udaipur, website development india, e-commerce website, landing page design, UI UX design, affordable website design rajasthan"
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
