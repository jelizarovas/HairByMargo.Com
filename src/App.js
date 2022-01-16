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

function App() {
  return (
    <div className="App bg-gray-300">
      <Navbar />
      <BrowserRouter basename="/">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Welcome />
                <Services />
                <Gallery />
                <About />
                <Reviews />
                <Team />
                <Contact />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
