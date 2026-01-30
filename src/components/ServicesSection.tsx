import ambuletteImage from "@/assets/ambulette.jpg";
import wheelchairVanImage from "@/assets/wheelchair-van.jpg";
import stretcherVanImage from "@/assets/stretcher-van.jpg";
import brodaImage from "@/assets/broda-chair.jpg";

const services = [
  {
    title: "Ambulettes",
    description: "Our Ambulette vehicles are used for passengers that need minimum assistance and can transfer from a wheelchair into a seat of a car.",
    image: ambuletteImage,
  },
  {
    title: "Wheelchair Vans",
    description: "Our Wheelchair accessible vans have been modified by increasing the interior size of the vehicle and equipping it with a lift or a ramp to allow wheelchair entry.",
    image: wheelchairVanImage,
  },
  {
    title: "Stretcher Vans",
    description: "Our stretcher vans are used for medical transportation for non-ambulatory or convalescent passengers that need no monitoring while being transported.",
    image: stretcherVanImage,
  },
  {
    title: "Broda Transport",
    description: "The Broda Traversa Wheelchair is a safe, efficient, and cost-effective transport solution, reducing lifting risks and ideal for single-caregiver operation.",
    image: brodaImage,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We offer a comprehensive range of non-emergency medical transportation services to meet your specific needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-card rounded-xl overflow-hidden service-card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
