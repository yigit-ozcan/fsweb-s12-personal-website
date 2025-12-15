import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme")
        return saved ? saved : "light";
    })

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);

    } , [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}