import React from 'react';
import { Link } from 'react-router-dom'

const Navbar =() =>(
    <div>
        <nav>
            <div className="nav-wrapper blue dark-4">
            <Link to="/" className="brand-logo">Phone Exibition</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Phones</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Phones/add">Add Phone</Link></li>
            </ul>
            </div>
        </nav>
    </div>
)
export default Navbar;
