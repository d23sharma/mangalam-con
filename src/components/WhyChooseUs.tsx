import { Users, ShieldCheck, IndianRupee, Clock } from "lucide-react";

const features = [
  { icon: Users, title: "Experienced Construction Team" },
  { icon: ShieldCheck, title: "High Quality Materials" },
  { icon: IndianRupee, title: "Transparent & affordable Pricing" },
  { icon: Clock, title: "On-Time Project Delivery" },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Why Choose <span className="text-gradient-gold">Mangalam Construction</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-sm md:text-base font-semibold text-secondary-foreground">
                {f.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
