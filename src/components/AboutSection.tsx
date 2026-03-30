import { GraduationCap, Target, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Get to know more about my background and aspirations.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass rounded-xl p-6 hover:glow transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <GraduationCap size={20} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="space-y-3 text-sm">
              <p className="text-foreground font-medium">B.Tech in Information Technology</p>
              <p className="text-muted-foreground">Bharath Niketan Engineering College</p>
              <p className="text-muted-foreground">Affiliated with Anna University</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={14} /> <span>Graduation Year: 2026</span>
              </div>
            </div>
          </div>
          <div className="glass rounded-xl p-6 hover:glow transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <Target size={20} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Career Goal</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To become a skilled Full Stack Developer and Software Tester, building high-quality web applications 
              and ensuring exceptional software performance. Passionate about continuous learning and contributing 
              to meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
