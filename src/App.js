import React, { useState, useEffect, useCallback, useRef } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Welcome } from "./components/Welcome";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Reviews } from "./components/Reviews";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import CurrentScrolledSection from "./utils/CurrentScrolledSection";

function App() {
  const sectionsWrapperRef = useRef();
  return (
    <div className="App bg-gray-300">
      <Navbar />
      <BrowserRouter basename="/">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <CurrentScrolledSection sectionsWrapperRef={sectionsWrapperRef}>
                {({ currentSection }) => (
                  <div ref={sectionsWrapperRef}>
                    <Welcome />
                    <Services data-name="services" isActive={currentSection === "services"} />
                    <Gallery />
                    <About />
                    <Reviews />
                    <Team />
                    <Contact />
                  </div>
                )}
              </CurrentScrolledSection>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
