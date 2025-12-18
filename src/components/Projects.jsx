import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Projects = ({ projects }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section id="projects" className={isDark ? "bg-[#1A210B]" : "bg-[#CBF281]"}>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2
          className={`text-6xl font-bold mb-16 ${
            isDark ? "text-[#CBF281]" : "text-[#4731D3]"
          }`}
        >
          {projects.title}
        </h2>

        <div className="space-y-16">
          {projects.items.map((item) => (
            <article
              key={item.name}
              className={`rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl ${
                isDark ? "bg-[#2B2727]" : "bg-white"
              }`}
            >
              <div className="hidden md:grid grid-cols-2 gap-8">
                <div className="h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="py-10 px-10">
                  <h3
                    className={`text-4xl font-bold ${
                      isDark ? "text-[#8173DA]" : "text-[#4731D3]"
                    }`}
                  >
                    {item.name}
                  </h3>

                  <p
                    className={`mt-4 leading-relaxed ${
                      isDark ? "text-white/80" : "text-gray-700"
                    }`}
                  >
                    {item.description}
                  </p>

                  <ul className="flex gap-3 mt-6 text-sm font-medium">
                    {item.tech.map((t) => (
                      <li
                        key={t}
                        className={`px-4 py-1.5 rounded-full ${
                          isDark
                            ? "bg-[#8173DA] text-white"
                            : "bg-[#4731D3] text-white"
                        }`}
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
                      className={`mr-6 text-sm font-semibold underline underline-offset-4 ${
                        isDark ? "text-[#CBF281]" : "text-[#4731D3]"
                      }`}
                    >
                      View Live
                    </a>

                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-sm font-semibold underline underline-offset-4 ${
                        isDark ? "text-[#CBF281]" : "text-[#4731D3]"
                      }`}
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>

              {/*MOBILE*/}
              <div className="md:hidden flex flex-col">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3
                    className={`text-2xl font-bold ${
                      isDark ? "text-[#8173DA]" : "text-[#4731D3]"
                    }`}
                  >
                    {item.name}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isDark ? "text-white/80" : "text-gray-700"
                    }`}
                  >
                    {item.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 mt-4 text-xs font-medium">
                    {item.tech.map((t) => (
                      <li
                        key={t}
                        className={`px-3 py-1 rounded-full ${
                          isDark
                            ? "bg-[#8173DA] text-white"
                            : "bg-[#4731D3] text-white"
                        }`}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex gap-4">
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-sm font-semibold underline ${
                        isDark ? "text-[#CBF281]" : "text-[#4731D3]"
                      }`}
                    >
                      Live
                    </a>

                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-sm font-semibold underline ${
                        isDark ? "text-[#CBF281]" : "text-[#4731D3]"
                      }`}
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
