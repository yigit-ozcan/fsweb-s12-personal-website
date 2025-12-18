import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const iconMap = {
  github: faGithub,
  linkedin: faLinkedin,
};

const Hero = ({ hero }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute left-0 top-0 h-full w-[65%]
            ${isDark ? "bg-[#171043]" : "bg-[#4731D3]"}
          `}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[35%]
            ${isDark ? "bg-[#211F0B]" : "bg-[#CBF281]"}
          `}
        />
      </div>
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-6xl px-6 pt-32 pb-12">
          <div className="grid grid-cols-2 items-center gap-12">
            <div>
              <h1
                className={`text-6xl font-extrabold leading-tight text-[#CBF281]`}
              >
                {hero.title}
              </h1>

              <p
                className={`mt-6 max-w-md text-xl font-semibold
                  ${isDark ? "text-gray-300" : "text-white/90"}
                `}
              >
                {hero.subtitle}
              </p>

              <div className="mt-8 flex gap-4">
                {hero.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-3 rounded-md px-4 py-3 text-sm font-semibold shadow
                      ${
                        isDark
                          ? "bg-[#111827] text-[#CBF281] border border-gray-700"
                          : "bg-white text-[#4731D3]"
                      }
                    `}
                  >
                    <FontAwesomeIcon
                      icon={iconMap[s.icon]}
                      className="text-xl"
                    />
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div
                className={`mx-auto w-[450px] h-[550px] overflow-hidden rounded-2xl shadow-2xl
                  ${isDark ? "ring-1 ring-gray-700" : ""}
                `}
              >
                <img
                  src={hero.profileImage}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
