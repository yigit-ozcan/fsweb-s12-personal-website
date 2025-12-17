import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { content } from "./data/content";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  const { lang } = useContext(LanguageContext);

  const data = content[lang] || content.en;

  return (
    <>
      <Header />
      <Hero hero={data.hero} />
    </>
  );
}
