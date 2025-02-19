import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BusinessDetail from './pages/BusinessDetail';
import Home from './pages/Home';
import Contact from "./pages/Contact"
import Vision from "./pages/Vision"
import About from "./pages/About"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/business/:id" element={<BusinessDetail />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;