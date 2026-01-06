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
        <title>Web Design & Development in Udaipur | Lakecity Design</title>
        <meta
          name="description"
          content="Professional web design & development in Udaipur. We build stunning websites that convert visitors into customers. Fixed-price packages from ₹15k. Call now!"
        />
        <meta
          name="keywords"
          content="web design udaipur, website development udaipur, web designer rajasthan, ecommerce website india, landing page design, UI UX design udaipur, affordable website design, business website, wordpress developer udaipur, react developer india"
        />
        <link rel="canonical" href="https://lakecitydesign.com/" />
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
