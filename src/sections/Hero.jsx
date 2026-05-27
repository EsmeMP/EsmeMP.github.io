import {Button} from '@/components/Button';
import {
  Download,
  ArrowRight,
  Circle,
  ChevronDown
} from "lucide-react";
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';

const skills = [
    "",
    "Linux ♡",
    "Python",
    "PHP",
    "JavaScript",
    "Java",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Firebase Realtime Database",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Flutter",
    "ESP32",
    "Arduino",
    "Git",
    "GitHub",
    "Docker",
    "JWT",
    "",
    "",
];

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0">
            <img src="/public/backg.webp" alt="Hero img" className="w-full h-full opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/20 to-background"/>
        </div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) =>(
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor: "#FF00A4",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 30}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 1}s`,
                }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                            Ingeniería en Desarrollo Software · Machine Learning - Data Science - UI/UX 
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Construyendo <span className="text-primary glow-text">soluciones</span>
                            <br />
                            inteligentes con
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                propósito.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                            Estudiante de Ingeniería en Software 🎔 <br />
                            Apasionada por la Inteligencia Artificial, Machine Learning, con curiosidad abierta hacia el desarrollo web, móvil y todo lo que el código puede crear.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contáctame :3 <ArrowRight className="w-5 h-5"/>
                        </Button>
                        <AnimatedBorderButton>
                            <Download className="w-5 h-5" />
                            Descargar CV
                        </AnimatedBorderButton>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Redes Sociales:</span>
                        {[
                            { icon: Circle, href: "#" },
                            { icon: Circle, href: "#" },
                            ].map((social, i) => (
                            <a key={i} href={social.href} 
                            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Right Column - Profile image */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile image */}
                    <div className="relative max-w-md mx-auto">
                        <div 
                        className='absolute inset-0 
                        rounded-3xl bg-gradient-to-br
                        from-primary/30 via-transparent
                        to-primary/10 blur-2xl animate-pulse--glow'/>
                        <div className='relative glass rounded-3xl p-2 glow-border'>
                            <img src="/public/profile_photo.png" alt="Esme Munoz" className="w-full aspect-[4/5] object-cover rounded-2xl" />

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className='flex items-center gap-3'>
                                    <div className='w-3 h-3 bg-pink-600 rounded-full animate-pulse'/>
                                    <span className='text-sm font-medium'>Disponible para trabajar</span>
                                </div>
                            </div>
                            {/* Stats badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">+0.4</div>
                                <div className="text-xs text-muted-foreground">
                                    Years
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">
                Tecnologías con las que trabajo
            </p>
            <div className="relative overflow-hidden">
                <div
                className="absolute left-0 top-0 bottom-0 w-32
                bg-gradient-to-r from-background to-transparent z-10"
                />
                <div
                className="absolute right-0 top-0 bottom-0 w-32
                bg-gradient-to-l from-background to-transparent z-10"
                />
                <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, idx) => (
                    <div key={idx} className="flex-shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                        {skill}
                    </span>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
    <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
