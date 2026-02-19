import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-16 bg-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-hero-text">Contact Us</h1>
          <p className="text-hero-text/70 mt-4 max-w-2xl mx-auto">
            Have questions? Need to schedule a ride? Our team is here to help.
          </p>
        </div>
      </div>
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
