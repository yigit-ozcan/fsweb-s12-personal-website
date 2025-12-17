import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, toggleLang } = useContext(LanguageContext);
  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-lime-300 font-bold text-xl">almila</div>
          <div className="flex items-center gap-6">
            <button
              onClick={toggleLang}
              className="text-xs font-semibold tracking-widest text-white"
            >
              {lang === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
            </button>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-widest text-white">
                DARK MODE
              </span>
              <button
                onClick={toggleTheme}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  theme === "dark" ? "bg-lime-300" : "bg-indigo-200"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-indigo-700 transition-transform
    ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
