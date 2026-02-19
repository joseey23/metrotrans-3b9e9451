import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-16 bg-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-hero-text">Our Services</h1>
          <p className="text-hero-text/70 mt-4 max-w-2xl mx-auto">
            Comprehensive non-emergency medical transportation services tailored to your needs.
          </p>
        </div>
      </div>
      <ServicesSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;
