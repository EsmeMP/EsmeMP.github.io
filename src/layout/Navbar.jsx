import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
    {href: '#about', label: 'Sobre Mí'},
    {href: '#projects', label: 'Proyectos'},
    {href: '#certificates', label: 'Certificados'},
    {href: '#contact', label: 'Contacto'},
];

const useTypewriter = (text, speed = 50, delay = 2000) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed + Math.random() * 30);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text]);

  return { displayed, done };
};

export const Navbar = () => {
    const [isMobileMenuOpen, setIsmobileMenuOpen] = useState(false);
    const { displayed, done } = useTypewriter("meme@portfolio:~$");

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return ( 
        <header className={`fixed top-0 left-0 right-0 py-5 z-50 transition-all duration-300 ${
            scrolled 
                ? "bg-background/95 backdrop-blur-md border-border" 
                : "bg-transparent"
        }`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-lg font-bold tracking-tight font-mono hover:text-primary">
                    <span className="text-foreground">{displayed}</span>
                    <span className={`text-foreground ${done ? "cursor-blink" : "opacity-100"}`}>▍_</span>
                </a>
                
                {/* desktop nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA BUTTON */}
                <a className="hidden md:block" href="#contact" >
                    <Button size="lg">Contáctame :3</Button>
                </a>

                {/* mobile menu button */}
                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsmobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground py-2">
                                {link.label}
                            </a>
                        ))}
                        <Button href="#contact">Contáctame :3</Button>
                    </div>
                </div>
            )}
        </header>
    );
}