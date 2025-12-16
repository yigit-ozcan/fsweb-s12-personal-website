import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, toggleLang } = useContext(LanguageContext);
  return (
    <>
      <header>
        HEADER ÇALIŞIYOR <br />
        Theme: {theme}
        Lang: {lang}
      </header>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={toggleLang}>Toggle Lang</button>
    </>
  );
};

export default Header;
