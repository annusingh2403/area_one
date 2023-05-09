import React, {useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    // const location = useLocation();
    // const navigate = useNavigate();

    const [nav, setNav] = useState('home');

    const activeNav = (e, param) => {
        setNav(param);
    }

    console.log(nav);
    
    // navigate(0)


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
                <li><Link to="/" className={nav === 'home' ? "activeNav" : ''} onClick={((e) => activeNav(e, "home"))}>Home</Link></li>
                <li><Link to="/order" className={nav === 'order' ? "activeNav" : ''} onClick={((e) => activeNav(e, "order"))}>Order</Link></li>
                <li><Link to="/facts" className={nav === 'facts' ? "activeNav" : ''} onClick={((e) => activeNav(e, "facts"))}>Facts</Link></li>
                <li><Link to="/gallery" className={nav === 'gallery' ? "activeNav" : ''} onClick={((e) => activeNav(e, "gallery"))}>Gallery</Link></li>
                <li><Link to="/contact" className={nav === 'contact' ? "activeNav" : ''} onClick={((e) => activeNav(e, "contact"))}>Contact</Link></li>
            </ul>
            {/* <ul className='nav-list'>
                <li><Link to="/" className={nav === '/' ? "activeNav" : ''} >Home</Link></li>
                <li><Link to="/order" className={nav === '/order' ? "activeNav" : ''} >Order</Link></li>
                <li><Link to="/facts" className={nav === '/facts' ? "activeNav" : ''} >Facts</Link></li>
                <li><Link to="/gallery" className={nav === '/gallery' ? "activeNav" : ''} >Gallery</Link></li>
                <li><Link to="/contact" className={nav === '/contact' ? "activeNav" : ''}>Contact</Link></li>
            </ul> */}
        </nav>
    </div>
    
  )
}

export default Navbar
