const skills = [
  { category: "Frontend", items: [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 60 },
  ]},
  { category: "Backend", items: [
    { name: "Python", level: 65 },
  ]},
  { category: "Database", items: [
    { name: "SQL", level: 70 },
  ]},
  { category: "Other", items: [
    { name: "UI/UX Design", level: 60 },
    { name: "Software Testing", level: 65 },
  ]},
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Technologies and tools I work with.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skills.map((group) => (
            <div key={group.category} className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-5 gradient-text">{group.category}</h3>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full gradient-bg transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
