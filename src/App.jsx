import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Corporate from "./pages/Corporate/Corporate";
import Contact from "./pages/Contact/Contact";
import WhatsAppButton from "./components/ui/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
