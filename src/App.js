import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Teams from "./components/Teams";
import Photos from "./components/Photos";
import Members from "./components/Members";
import Research from "./components/ResearchTeams/Research";
import Papers from "./components/ResearchTeams/Papers";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="equityanalyst" element={<Research group="Equity Analyst"/>} >
            <Route path="" element={<Papers />}>
            </Route>
          </Route>
          <Route path="ventureanalyst" element={<Research group="Venture Analyst"/>} >
            <Route path="" element={<Papers />}>
            </Route>
          </Route>
          <Route path="cryptoanalyst" element={<Research group="Crypto Analyst"/>} >
            <Route path="" element={<Papers />}>
            </Route>
          </Route>
          <Route path="/members" element={<Members />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
