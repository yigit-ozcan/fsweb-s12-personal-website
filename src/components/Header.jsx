import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, toggleLang } = useContext(LanguageContext);

  const isDark = theme === "dark";

  return (
    <header className="absolute top-0 left-0 w-full h-20 z-30">
      <div className="absolute inset-0">
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

      <div className="relative h-full grid grid-cols-[65%_35%] items-center px-6">
        <div className="flex items-center max-w-6xl mx-auto w-full">
          <h1 className={`font-bold text-3xl pl-88 text-[#CBF281]`}>yiğit</h1>

          <button
            onClick={toggleLang}
            className={`ml-auto text-l font-semibold tracking-widest text-[#CBF281]`}
          >
            {lang === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
          </button>
        </div>

        <div className="flex items-center gap-3 pl-6">
          <span
            className={`w-[110px] text-l font-semibold tracking-widest
              whitespace-nowrap text-right
              ${isDark ? "text-gray-300" : "text-[#4731D3]"}
            `}
          >
            {isDark ? "DARK MODE" : "LIGHT MODE"}
          </span>

          <button
            onClick={toggleTheme}
            className={`relative w-12 h-6 rounded-full
              ${isDark ? "bg-gray-600" : "bg-[#4731D3]"}
            `}
          >
            <span
              className={`absolute top-1 left-1 h-4 w-4 rounded-full
                bg-yellow-400 transition-transform duration-300
                ${isDark ? "translate-x-[24px]" : "translate-x-0"}
              `}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
