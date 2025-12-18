const Skills = ({ skills }) => {
  return (
    <section id="skills">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-3 gap-x-24">
          <h2 className="text-5xl font-extrabold text-indigo-700">
            {skills.title}
          </h2>
          <div className="col-span-2 grid grid-cols-2 gap-x-24 gap-y-12">
            {skills.items.map((item) => (
              <div key={item.name} className="flex items-center gap-6">
                <div className="h-28 w-28 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-lg font-medium text-gray-500 uppercase tracking-wide">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
