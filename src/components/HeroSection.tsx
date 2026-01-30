import heroImage from "@/assets/hero-transport.jpg";
import BookingForm from "./BookingForm";

const HeroSection = () => {
  return (
    <section id="book" className="relative min-h-screen flex items-center pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MetroTrans medical transport van"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-hero-text">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 pt-4 animate-fade-in-up">
              Safe.<br />
              Reliable.<br />
              <span className="text-primary">Non-Emergency</span><br />
              Medical Transport.
            </h1>
            <p className="text-lg md:text-xl text-hero-text/80 max-w-xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              MetroTrans provides professional and dependable transportation for patients who require medical transfers without the urgency of emergency services. From hospital visits to dialysis appointments, we ensure every ride is safe, timely, and comfortable.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 bg-hero/50 backdrop-blur px-4 py-2 rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium">24/7 Dispatch Available</span>
              </div>
              <div className="flex items-center gap-2 bg-hero/50 backdrop-blur px-4 py-2 rounded-full">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-sm font-medium">HIPAA Compliant</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Booking Form */}
          <div className="flex justify-center lg:justify-end">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
