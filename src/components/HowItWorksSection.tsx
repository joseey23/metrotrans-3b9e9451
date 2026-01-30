import { Calendar, CheckCircle, Car, Star } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Request Ride",
    description: "Enter your pickup, destination, and preferred time via the site or contact us directly through our phone number.",
    step: "01",
  },
  {
    icon: CheckCircle,
    title: "Confirm & Estimate",
    description: "Receive confirmation, fare estimate, and assigned vehicle information.",
    step: "02",
  },
  {
    icon: Car,
    title: "Ride with Care",
    description: "Our trained team arrives, assists you onboard, and ensures a comfortable journey.",
    step: "03",
  },
  {
    icon: Star,
    title: "Arrival & Follow-Up",
    description: "We safely deliver you to your destination. You can rate service or request feedback.",
    step: "04",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Booking Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            How it works
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Booking your non-emergency medical transport is simple and straightforward.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-xl p-8 text-center service-card-shadow hover:shadow-lg transition-shadow">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                
                <h3 className="text-lg font-bold text-card-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
