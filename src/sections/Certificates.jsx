import { ExternalLink, Award } from "lucide-react";
import { useState } from "react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const certificates = [
  {
    title: "Git y GitHub",
    issuer: "Platzi",
    date: "Noviembre 2024",
    category: "Dev Tools",
    link: "/certificates/Git&GitHub.pdf",
  },
  {
    title: "Introduction to Python",
    issuer: "SoloLearn",
    date: "Enero 2025",
    category: "Python",
    link: "/certificates/IntroductionPython.pdf",
  },
  {
    title: "Python Developer",
    issuer: "SoloLearn",
    date: "Abril 2025",
    category: "Python",
    link: "/certificates/PythonDeveloper.pdf",
  },
  {
    title: "Azure e Inteligencia Artificial",
    issuer: "Universidad",
    date: "Octubre 2025",
    category: "IA & ML",
    link: "/certificates/Azure.pdf",
  },
  {
    title: "Python and Cursor: Smarter Development with AI",
    issuer: "Santander",
    date: "Octubre 2025",
    category: "Python",
    link: "/certificates/Python&cursor.pdf",
  },
  {
    title: "Python para Ciencia de Datos",
    issuer: "Platzi",
    date: "Noviembre 2025",
    category: "IA & ML",
    link: "https://platzi.com/p/munoz.pad.esme.04/curso/10365-python-data-science/diploma/detalle/",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Santander",
    date: "Noviembre 2025",
    category: "IA & ML",
    link: "/certificates/DataScience.pdf",
  },
  {
    title: "Fundamentos de Machine Learning",
    issuer: "Platzi",
    date: "Noviembre 2025",
    category: "IA & ML",
    link: "https://platzi.com/p/munoz.pad.esme.04/curso/12138-machine-learning/diploma/detalle/",
  },
  {
    title: "Regresión Lineal con Python y Scikit-Learn",
    issuer: "Platzi",
    date: "Diciembre 2025",
    category: "IA & ML",
    link: "https://platzi.com/p/munoz.pad.esme.04/curso/2739-regresion-lineal/diploma/detalle/",
  },
  {
    title: "Responsible Prompting: Maximize AI in Your Business",
    issuer: "Santander",
    date: "Diciembre 2025",
    category: "IA & ML",
    link: "/certificates/ResponsiblePrompting.pdf",
  },
  {
    title: "AI Fundamentals",
    issuer: "Coursera",
    date: "Mayo 2026",
    category: "IA & ML",
    link: "https://coursera.org/share/d91594cf868d9ea8e5d92dfb1db6187b",
  },
  {
    title: "AI Deep Learning Projects with TensorFlow",
    issuer: "Coursera",
    date: "Mayo 2026",
    category: "IA & ML",
    link: "https://coursera.org/share/4f6de1c33881dbc13bb2cac1b7cd8b03",
  },
  {
    title: "2do Congreso de Tecnología y Ciberseguridad",
    issuer: "Universidad",
    date: "Octubre 2025",
    category: "Evento",
    link: "/certificates/SegundoCongreso.pdf",
  },

];

const categories = ["Todos", "IA & ML", "Python", "Dev Tools", "Evento"];

const categoryColors = {
  "IA & ML": "text-violet-400 bg-violet-400/10 border-violet-400/20",
  Python: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "Dev Tools": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Evento: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

const issuerLogos = {
  Coursera:
    "https://img.shields.io/badge/Coursera-0056D2?style=flat&logo=coursera&logoColor=white",
  Platzi:
    "https://img.shields.io/badge/Platzi-98CA3F?style=flat&logo=platzi&logoColor=white",
  Santander:
    "https://img.shields.io/badge/Santander-EC0000?style=flat&logo=santander&logoColor=white",
  SoloLearn:
    "https://img.shields.io/badge/SoloLearn-149EF2?style=flat&logo=sololearn&logoColor=white",
  Universidad:
    "https://img.shields.io/badge/Universidad-6366F1?style=flat&logoColor=white",
};

export const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === "Todos"
    ? certificates
    : certificates.filter((c) => c.category === activeCategory);
  
  const displayed = showAll ? filtered : filtered.slice(0, 6);
  
  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certificaciones
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Aprendizaje{" "}
            <span className="font-serif italic font-normal text-white">
              constante.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Certificaciones y formación complementaria en IA, Machine Learning,
            Python y desarrollo de software.
          </p>
        </div>

        {/* Filter Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in animation-delay-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "glass border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div> */}

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 [&:hover>a]:brightness-50 [&:hover>a:hover]:brightness-100">
          {displayed.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-2xl p-5 animate-fade-in flex flex-col gap-4 hover:glow-border hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full border font-medium ${
                    categoryColors[cert.category]
                  }`}
                >
                  {cert.category}
                </span>
              </div>

              {/* Title */}
              <div className="flex-1">
                <h3 className="font-semibold text-sm leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <img
                  src={issuerLogos[cert.issuer]}
                  alt={cert.issuer}
                  className="h-5 opacity-80"
                />
                {/* <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all duration-300 opacity-60 group-hover:opacity-100"
                >
                  <ExternalLink className="w-4 h-4" />
                </a> */}
              </div>
            </a>
          ))}
        </div>
        {filtered.length > 6 && (
          <div className="flex justify-center mt-10">
            <AnimatedBorderButton onClick={() => setShowAll((prev) => !prev)}>
              {showAll ? "Ver menos" : `Ver todos (${filtered.length})`}
            </AnimatedBorderButton>
          </div>
        )}
      </div>
    </section>
  );
};