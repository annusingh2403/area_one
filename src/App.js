import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/home/navbar/Navbar';
import Home from './components/home/Home';
import Facts from './components/facts/Facts';
import Gallery from './components/gallery/Gallery';
import Order from './components/order/Order';
import Contact from './components/contact/Contact';
import Cart from './components/home/cart/Cart';
import Footer from './components/home/footer/Footer';

function App() {
  return (
    <Router>  
        <Navbar/>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/order" element={<Order/>} />
            <Route path="/facts" element={<Facts/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>

        <Footer/>
    </Router>
       
  );
}

export default App;
