import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    <LanguageProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </LanguageProvider>
  </ThemeProvider>
  
)
