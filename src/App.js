import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Teams from "./pages/Teams";
import Photos from "./pages/Photos";
import Officers from "./pages/Officers";
import PageNotFound from "./components/PageNotFound";
import Research from "./components/Research";
import EquityPapers from "./components/ResearchTeams/EquityPapers";
import VenturePapers from "./components/ResearchTeams/VenturePapers";
import CryptoPapers from "./components/ResearchTeams/CryptoPapers";


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
            <Route path="" element={<EquityPapers />}>
            </Route>
          </Route>
          <Route path="ventureanalyst" element={<Research group="Venture Analyst"/>} >
            <Route path="" element={<VenturePapers />}>
            </Route>
          </Route>
          <Route path="cryptoanalyst" element={<Research group="Crypto Analyst"/>} >
            <Route path="" element={<CryptoPapers />}>
            </Route>
          </Route>
          <Route path="/officers" element={<Officers />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
