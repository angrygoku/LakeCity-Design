import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Lakecity Designs | Wedding, Events & Business Design Studio</title>
        <meta
          name="description"
          content="Lakecity Designs creates stunning wedding stationery, pitch decks, event printables, and beautiful websites. From smallest details to biggest visions."
        />
        <meta
          name="keywords"
          content="wedding design, wedding cards, wedding invitations, pitch deck design, event printables, website design, menu design, business presentations"
        />
        <link rel="canonical" href="https://lakecitydesigns.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
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
