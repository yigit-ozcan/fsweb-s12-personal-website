const Projects = ({ projects }) => {
  return (
    <section id="projects" className="bg-lime-300">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-6xl font-bold text-indigo-700 mb-16">
          {projects.title}
        </h2>

        <div className="space-y-16">
          {projects.items.map((item) => (
            <article
              key={item.name}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="py-10 px-10">
                  <h3 className="text-4xl font-bold text-indigo-700">
                    {item.name}
                  </h3>

                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="flex gap-3 mt-6 text-sm font-medium">
                    {item.tech.map((t) => (
                      <li
                        key={t}
                        className="px-4 py-1.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
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
                      className="inline-block mr-6 text-sm font-semibold text-indigo-900 underline underline-offset-4"
                    >
                      View Live
                    </a>

                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mr-6 text-sm font-semibold text-indigo-900 underline underline-offset-4"
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
