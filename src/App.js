import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

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
    <div className="App bg-red-700">
      <Navbar />
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <Welcome />
            <Services />
            <Gallery />
            <About />
            <Reviews />
            <Team />
            <Contact />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
