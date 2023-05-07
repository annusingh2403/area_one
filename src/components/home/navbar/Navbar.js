import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [nav, setNav] = useState('home');

    const activeNav = (e, param) => {
        setNav(param);
    }

  return (

    <div className='navbar'>
        <nav className="nav">
            <h3>
                <Link to="/" className='logo'>
                    Area_☻ne
                </Link>
                <p>♪ The little coffee shop on the corner of the street ♥</p>
            </h3>
            <ul className='nav-list'>
                <li><Link to="/" className={nav === "home" ? "activeNav" : ''} onClick={((e) => activeNav(e, "home"))}>Home</Link></li>
                <li><Link to="/products" className={nav === "facts" ? "activeNav" : ''} onClick={((e) => activeNav(e, "facts"))}>Facts</Link></li>
                <li><Link to="/gallery" className={nav === "gallery" ? "activeNav" : ''} onClick={((e) => activeNav(e, "gallery"))}>Gallery</Link></li>
                <li><Link to="/about" className={nav === "about" ? "activeNav" : ''} onClick={((e) => activeNav(e, "about"))}>About</Link></li>
                <li><Link to="/contact" className={nav === "contact" ? "activeNav" : ''} onClick={((e) => activeNav(e, "contact"))}>Contact</Link></li>
            </ul>
        </nav>
    </div>
    
  )
}

export default Navbar
