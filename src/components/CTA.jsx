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
      const res = await axios.post("https://reqres.in/api/workintech", {
        email,
      });
      console.log(res.data);
      setSuccess("Mesajın alındı!");
      setEmail("");
    } catch (err) {
      console.error(err);
      setError("Bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  };

  // sadece tema bazlı class seçimi
  const isDark = theme === "dark";

  return (
    <section id="cta" className={isDark ? "bg-[#252128]" : ""}>
      <div className="mx-auto max-w-6xl px-6 py-32 text-center">
        <h2
          className={
            isDark
              ? "text-6xl font-bold text-[#8F88FF]"
              : "text-6xl font-bold text-[#4731D3]"
          }
        >
          {cta.text}
        </h2>

        <p
          className={
            isDark
              ? "mt-6 text-xl text-white max-w-xl mx-auto leading-relaxed"
              : "mt-6 text-xl text-gray-700 max-w-xl mx-auto leading-relaxed"
          }
        >
          {cta.description}
        </p>

        <a
          href={`mailto:${cta.email}`}
          className={
            isDark
              ? "block mt-6 text-lg text-[#8F88FF] font-medium underline underline-offset-4"
              : "block mt-6 text-lg text-[#4731D3] font-medium underline underline-offset-4"
          }
        >
          {cta.email}
        </a>

        {isLoading && (
          <p className={isDark ? "mt-4 text-gray-300" : "mt-4 text-gray-500"}>
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
              className={
                isDark
                  ? "text-[#8F88FF] hover:opacity-80 transition"
                  : "text-[#4731D3] hover:text-indigo-500 transition"
              }
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
