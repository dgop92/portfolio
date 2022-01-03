import "normalize.css";
import React, { useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./constants/themes";
import { Header, Footer } from "./components/AppLayout";
import { Home, About, Skill, Project } from "./pages";

import { LanguageContext } from "./context/customContexts";
import defaultLanguage from "./translations/en";

export default function App() {
  const [language, setLanguage] = useState(defaultLanguage);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const scrollToSection = (event, navRef, linkIndex) => {
    event.preventDefault();

    const navHeight = navRef.current.getBoundingClientRect().height;
    const position = refs[linkIndex].current.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  };

  /* 
  It is not necessary to use i18n due to this project is quite simple
  */
  const changeLanguage = (languageCode) => {
    import(`./translations/${languageCode}`).then(
      ({ default: translations }) => {
        setLanguage(translations);
      }
    );
  };

  return (
    <LanguageContext.Provider value={language}>
      <ThemeProvider theme={mainTheme}>
        <Header
          scrollToSection={scrollToSection}
          changeLanguage={changeLanguage}
        />
        <Home id="home" ref={refs[0]} />
        <About id="about" ref={refs[1]} />
        <Skill id="skills" ref={refs[2]} />
        <Project id="projects" ref={refs[3]} />
        <Footer />
      </ThemeProvider>
    </LanguageContext.Provider>
  );
}
