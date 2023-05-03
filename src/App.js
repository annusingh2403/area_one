import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/home/navbar/Navbar';
import Home from './components/home/Home';
import Facts from './components/facts/Facts';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/home/footer/Footer';

function App() {
  return (
    <Router>  
        <Navbar/>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Facts/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>

        <Footer/>
    </Router>
       
  );
}

export default App;
