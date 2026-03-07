import { CheckCircle2 } from "lucide-react";

const highlights = [
  "10+ Years Experience",
  "Residential & Commercial Projects",
  "Trusted Local Expertise",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-gradient-gold">Mangalam Construction</span>
          </h2>
        </div>

        <p className="text-muted-foreground text-lg leading-relaxed text-center mb-10">
          Mangalam Construction is a professional construction company based in
          Indore, Madhya Pradesh. We specialize in building high-quality
          residential homes and commercial buildings. With a strong commitment to
          quality, transparency, and timely delivery, we help clients turn their
          dream projects into reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {highlights.map((h) => (
            <div
              key={h}
              className="flex items-center gap-3 bg-card rounded-lg px-6 py-4 shadow-sm border border-border"
            >
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-semibold text-foreground">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
