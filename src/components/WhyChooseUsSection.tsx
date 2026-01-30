import { Shield, Clock, Heart, Award, Users, Accessibility } from "lucide-react";
import driverImage from "@/assets/driver-helping-patient.jpg";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "All vehicles are regularly inspected and sanitized",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description: "Punctual service you can rely on",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Trained drivers who truly care",
  },
  {
    icon: Award,
    title: "Fully Licensed",
    description: "State certified and insured",
  },
  {
    icon: Users,
    title: "Trained Team",
    description: "Professional medical transport specialists",
  },
  {
    icon: Accessibility,
    title: "Accessibility First",
    description: "Equipment for all mobility needs",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden service-card-shadow">
              <img
                src={driverImage}
                alt="MetroTrans driver helping patient"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years of Service</div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Why Choose MetroTrans?
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              At MetroTrans, we understand that access to healthcare goes beyond hospital walls. That's why we've built a service designed to bridge the gap between patients and the care they need.
            </p>
            <p className="text-muted-foreground mb-8">
              Our mission is simple: to provide safe, reliable, and dignified non-emergency medical transportation. Whether it's a routine check-up, dialysis session, rehabilitation appointment, or interfacility transfer, our team ensures every ride is handled with compassion and professionalism.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book A Ride
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
