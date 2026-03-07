import projectVilla from "@/assets/project-villa.jpg";
import projectDuplex from "@/assets/project-duplex.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectApartment from "@/assets/project-apartment.jpg";

const projects = [
  { image: projectVilla, name: "Luxury Villa Construction", type: "Residential", location: "Indore" },
  { image: projectDuplex, name: "Modern Duplex Home", type: "Residential", location: "Indore" },
  { image: projectOffice, name: "Commercial Office Building", type: "Commercial", location: "Indore" },
  { image: projectApartment, name: "Residential Apartment Project", type: "Residential", location: "Indore" },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Recent <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A glimpse of our finest construction projects across Indore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-xl overflow-hidden bg-card shadow-sm border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.type} · {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
