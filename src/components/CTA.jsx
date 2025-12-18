import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const iconMap = {
  twitter: faTwitter,
  instagram: faInstagram,
  email: faEnvelope,
};

const CTA = ({ cta }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post("https://reqres.in/api/workintech", { email });
      setSuccess("Mesajın alındı!");
      setEmail("");
    } catch {
      setError("Bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section
        id="cta"
        className={`hidden md:block ${isDark ? "bg-[#252128]" : ""}`}
      >
        <div className="mx-auto max-w-6xl px-6 py-32 text-center">
          <h2
            className={`text-6xl font-bold ${
              isDark ? "text-[#8F88FF]" : "text-[#4731D3]"
            }`}
          >
            {cta.text}
          </h2>

          <p
            className={`mt-6 text-xl max-w-xl mx-auto leading-relaxed ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            {cta.description}
          </p>

          <a
            href={`mailto:${cta.email}`}
            className={`block mt-6 text-lg font-medium underline underline-offset-4 ${
              isDark ? "text-[#8F88FF]" : "text-[#4731D3]"
            }`}
          >
            {cta.email}
          </a>

          {isLoading && (
            <p className={`mt-4 ${isDark ? "text-gray-300" : "text-gray-500"}`}>
              Gönderiliyor...
            </p>
          )}
          {error && <p className="mt-4 text-red-600">{error}</p>}
          {success && <p className="mt-4 text-green-600">{success}</p>}

          <div className="mt-10 flex justify-center gap-8">
            {cta.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                aria-label={s.name}
                className={`transition ${
                  isDark ? "text-[#8F88FF]" : "text-[#4731D3]"
                }`}
              >
                <FontAwesomeIcon icon={iconMap[s.icon]} className="text-2xl" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/*MOBILE*/}
      <section
        id="cta-mobile"
        className={`md:hidden ${isDark ? "bg-[#252128]" : ""}`}
      >
        <div className="px-6 py-20 text-center">
          <h2
            className={`text-4xl font-bold ${
              isDark ? "text-[#8F88FF]" : "text-[#4731D3]"
            }`}
          >
            {cta.text}
          </h2>

          <p
            className={`mt-4 text-base leading-relaxed ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            {cta.description}
          </p>

          <a
            href={`mailto:${cta.email}`}
            className={`block mt-4 text-base font-medium underline underline-offset-4 ${
              isDark ? "text-[#8F88FF]" : "text-[#4731D3]"
            }`}
          >
            {cta.email}
          </a>

          <div className="mt-8 flex justify-center gap-6">
            {cta.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                aria-label={s.name}
                className={`transition ${
                  isDark ? "text-[#8F88FF]" : "text-[#4731D3]"
                }`}
              >
                <FontAwesomeIcon icon={iconMap[s.icon]} className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
