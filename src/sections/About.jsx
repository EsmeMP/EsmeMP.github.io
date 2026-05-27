import { BrainCircuit, ChessKnight, Workflow, Telescope, } from "lucide-react";

const highlights = [
  {
    icon: BrainCircuit,
    title: "Innovación",
    description:
      "Exploro nuevas tecnologías y formas de crear sistemas más inteligentes e interactivos.",
  },
  {
    icon: ChessKnight,
    title: "IA & ML",
    description:
      "Apasionada por la inteligencia artificial, machine learning y su potencial para transformar el mundo.",
  },
  {
    icon: Workflow,
    title: "Colaboración",
    description: "Trabajo en equipo para transformar ideas en productos reales.",
  },
  {
    icon: Telescope,
    title: "Curiosidad",
    description:
      "Siempre aprendiendo: IA, web, móvil, IoT, bases de datos... el stack completo.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Construyendo el futuro de la tecnología,
              <span className="font-serif italic font-normal text-white">
                {" "}
                una línea a la vez.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy estudiante de Ingeniería en Software, próxima a egresar, con
                una fuerte inclinación hacia la Inteligencia Artificial (
                Machine Learning, Deep Learning y Agentes de IA). Mi curiosidad por entender
                cómo funcionan las cosas me ha llevado a explorar tecnologías
                muy diversas.
              </p>
              <p>
                A lo largo de mi formación he trabajado con Python, JavaScript,
                Java, PHP, Flutter, bases de datos relacionales y no relacionales,
                contenedores con Docker, IoT, y más. Me
                adapto rápido a nuevos entornos y disfruto aprender en el camino.
              </p>
              <p>
                Fuera del código disfruto leer, cuidar plantas y pasar tiempo con mis mascotas.
                También me interesa aprender piano, jugar ajedrez y explorar nuevas ideas,
                tanto en tecnología como en la vida diaria. Siempre estoy abierta a
                oportunidades que me reten a seguir creciendo.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Quiero construir tecnología que resuelva problemas reales —
                soluciones que sean inteligentes, accesibles y que la gente
                disfrute usar."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};