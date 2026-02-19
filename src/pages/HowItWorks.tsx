import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import HowItWorksSection from "@/components/HowItWorksSection";
import BookingCTA from "@/components/BookingCTA";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-16 bg-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-hero-text">How It Works</h1>
          <p className="text-hero-text/70 mt-4 max-w-2xl mx-auto">
            Booking your non-emergency medical transport is simple and straightforward.
          </p>
        </div>
      </div>
      <HowItWorksSection />
      <BookingCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HowItWorks;
