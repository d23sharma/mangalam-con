import { Home, Building2, Handshake } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "Custom homes, villas, and apartments built with high quality materials and modern architecture.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "Office buildings, retail shops, commercial complexes, and industrial spaces.",
  },
  {
    icon: Handshake,
    title: "Property Buying & Selling",
    description:
      "Helping clients buy and sell residential and commercial properties in Indore with trusted guidance.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Construction <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive construction and property services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
