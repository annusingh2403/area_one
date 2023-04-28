import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/home/navbar/Navbar';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>  
        <Navbar/>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
       
  );
}

export default App;
