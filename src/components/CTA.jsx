import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  twitter: faTwitter,
  instagram: faInstagram,
  email: faEnvelope,
};

const CTA = ({ cta }) => {
  return (
    <section id="cta">
      <div className="mx-auto max-w-6xl px-6 py-32 text-center">
        <h2 className="text-6xl font-bold text-indigo-600">{cta.text}</h2>
        <p className="mt-6 text-xl text-gray-700 max-w-xl mx-auto leading-relaxed">
          {cta.description}
        </p>

        <a
          href={`mailto:${cta.email}`}
          className="block mt-6 text-lg text-indigo-600 font-medium underline underline-offset-4"
        >
          {cta.email}
        </a>

        <div className="mt-10 flex justify-center gap-8">
          {cta.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              aria-label={s.name}
              className="text-indigo-600 hover:text-indigo-500 transition"
            >
              <FontAwesomeIcon icon={iconMap[s.icon]} className="text-2xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
