
import { FileDown, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary text-sm font-medium mb-2 animate-fade-up">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="gradient-text">Mohan</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Aspiring Full Stack Developer & Software Tester
            </h2>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Currently pursuing B.Tech in Information Technology, undergoing training in Full Stack Development 
              and Software Testing. Actively seeking opportunities that match my skills and career goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="/MOHAN.pdf"
                download="MOHAN.pdf"
                className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity glow"
              >
                <FileDown size={18} /> View Resume
              </a>
              <a
                href="#contact"
                className="glass px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-secondary transition-colors"
              >
                <Mail size={18} /> Contact Me
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden gradient-border glow">
                <img 
                  src="https://i.postimg.cc/FzRjB6Gb/file-00000000c11c7208ac1756b3620d47a6.png"
                  alt="Mohan - Full Stack Developer"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover object-top "
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full gradient-bg animate-float" />
              <div className="absolute -top-4 -left-4 w-4 h-4 rounded-full bg-accent animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
