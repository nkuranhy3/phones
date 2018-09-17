import React from 'react';
import { Link } from 'react-router-dom'

const Navbar =() =>(
    <div className="navbar-fixed">
        <nav>

          <div className="nav-wrapper blue">
          <div className="container">
            <Link to="/" className="brand-logo">Phone Exibition</Link>
            <a href="/" data-target="main-menu" className="sidenav-trigger"><i className="fa fa-bars"></i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Phones</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Phones/add">Add Phone</Link></li>
            </ul>
          </div>
          </div>
        </nav>
        <ul className="sidenav" id="main-menu">
            <li><Link to="/">Phones</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Phones/add">Add Phone</Link></li>
        </ul>
  </div>
)
export default Navbar;
