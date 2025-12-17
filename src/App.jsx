import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { content } from "./data/content";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";

export default function App() {
  const { lang } = useContext(LanguageContext);

  const data = content[lang] || content.en;

  return (
    <>
      <Header />
      <Hero hero={data.hero} />
      <Skills skills={data.skills} />
      <Profile profile={data.profile} />
    </>
  );
}
