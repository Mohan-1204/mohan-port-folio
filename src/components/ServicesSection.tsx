import { Globe, Palette, Bug } from "lucide-react";

const services = [
   {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Designing user-friendly and visually appealing interfaces with a focus on usability and aesthetics.",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Building responsive and dynamic websites using modern technologies like React, JavaScript, and Python.",
  },
 
  {
    icon: Bug,
    title: "Software Testing",
    desc: "Automation & Manual testing and ensuring application quality, performance, and reliability.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          What I can do for you.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass rounded-xl p-6 text-center hover:glow transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
