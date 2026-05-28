import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Gladiator's POS",
    description:
      "Sistema de punto de venta para una tienda de accesorios, con gestión de inventario, ventas, empleados y generación de reportes.",
    image: "/projects/Gladiators.png",
    tags: ["Flask", "PostgreSQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "#",
  },
  {
    title: "Módulos de Nóminas y Asistencias",
    description:
      "Plataforma para la gestión de nóminas y registro de asistencias de empleados, incluyendo autenticación segura y administración de información empresarial.",
    image: "/projects/Nominas.png",
    tags: ["PHP", "JWT", "Bootstrap", "HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "LightStep",
    description:
      "Ecosistema inteligente de iluminación compuesto por una plataforma web, aplicación móvil y un prototipo IoT. Permite controlar efectos, colores, duración y encendido de luces LED en tiempo real mediante Firebase.",
    image: "/projects/LightStep.png",
    tags: [
      "Flutter",
      "Dart",
      "Firebase",
      "ESP32",
      "Arduino",
      "IoT",
      "Django",
    ],
    link: "#",
  },
  {
    title: "RealTimeSimulator",
    description:
      "Conjunto de proyectos enfocados en visión artificial y simulación en tiempo real. GestBact AI - Simulación que utiliza reconocimiento de manos para controlar variables relacionadas con el crecimiento de bacterias y visualizar el comportamiento poblacional mediante gráficas.",
    image: "/projects/RealTime.png",
    tags: [
      "Python",
      "MediaPipe",
      "NumPy",
      "Matplotlib",
      "Pygame",
      "Computer Vision",
    ],
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Mis Proyectos
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Un poco
            <span className="font-serif italic font-normal text-white">
              {" "}
              de mi trabajo
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Una selección de proyectos reales, desde sistemas de gestión empresarial
            hasta ecosistemas IoT y simulaciones con visión artificial.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-card via-card/50
                  to-transparent opacity-30"
                />

                {/* Overlay Link */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                    group-hover:translate-x-1 
                    group-hover:-translate-y-1 transition-all"
                  />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};