import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Construction site with modern building at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-overlay-dark" />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 max-w-4xl mt-8 xs:mt-16 lg:mt-0">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
          Building Your Dream Homes with{" "}
          <span className="text-gradient-gold">Quality & Trust</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Mangalam Construction is a trusted construction company in Indore
          specializing in residential and commercial construction along with
          property buying and selling services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-dark transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="#projects"
            className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            View Our Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
