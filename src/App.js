import Footer from './components/footer';
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PortfolioPage from './pages/Portfolio';

import './assets/scss/bootstrap/bootstrap.scss';
import './assets/scss/app.scss'

function App() {
  return (
    <>
    <Header /> 

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route path="contact" element={<Contact />} />
    </Routes>

    <Footer /> 
    </>
  );
}

export default App;
