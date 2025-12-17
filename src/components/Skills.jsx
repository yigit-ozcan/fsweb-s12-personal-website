const Skills = ({ skills }) => {
  return (
    <section id="skills">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">{skills.title}</h2>
        <div className="grid grid-cols-6 gap-12 justify-items-center">
          {skills.items.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-4">
              <img src={item.icon} alt={item.name} className="h-16 w-16" />
              <span className="text-sm font-medium text-gray-800">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
