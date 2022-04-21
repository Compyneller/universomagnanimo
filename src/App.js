import "./App.css";
import Home from "./Pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Pages/AboutUs";
import Stip from "./Components/Strip/Stip";
import ContactUs from "./Pages/ContactUs";
import NavBar from "./Components/NavBar/NavBar";
import Services from "./Pages/Services";
import News from "./Pages/News";
import Career from "./Pages/Career";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
        <Stip />
      </Router>
    </div>
  );
}

export default App;
