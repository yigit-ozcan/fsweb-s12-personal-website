const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          {projects.title}
        </h2>

        <div className="space-y-12">
          {projects.items.map((item) => (
            <article
              key={item.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-8">
                {/* Image wrapper */}
                <div className="h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="py-8 pr-8">
                  <h3 className="text-xl font-semibold">{item.name}</h3>

                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="flex gap-3 mt-6 text-sm font-medium">
                    {item.tech.map((t) => (
                      <li
                        key={t}
                        className="px-3 py-1 rounded-full bg-gray-100"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mr-4 text-sm font-semibold"
                    >
                      View Live
                    </a>

                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-sm font-semibold"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
