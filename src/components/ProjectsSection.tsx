import { Folder, ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Portfolio Website", status: "Current Project", desc: "Personal portfolio built with React and Tailwind CSS." },
  { title: "Student Management System", status: "Planned", desc: "A system to manage student records and grades." },
  { title: "Coming Soon Project", status: "Coming Soon", desc: "An exciting real-time project in the works." },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Currently working on real-time projects to showcase soon.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass rounded-xl p-6 hover:glow transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder size={28} className="text-primary" />
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <span className="text-xs gradient-text font-medium">{p.status}</span>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
