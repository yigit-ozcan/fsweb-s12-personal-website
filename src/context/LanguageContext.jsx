import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {

    const [lang, setLang] = useState(() => {
        const saved = localStorage.getItem("lang");
        return saved ? saved : "en";
    });

    useEffect(() => {
        localStorage.setItem("lang", lang);
    },[lang])

    const toggleLang = () => {
        setLang(prev => prev === "en" ? "tr" : "en");
    }

    return (
        <LanguageContext.Provider value={{lang, toggleLang}}>
            {children}
        </LanguageContext.Provider>
    )
}