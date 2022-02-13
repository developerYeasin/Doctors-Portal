import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <div className="navbar-main">
        <div className="container">
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">about</Link>
            </li>
            <li>
              <Link to="dental-services">dental services</Link>
            </li>
            <li>
              <Link to="reviews">reviews</Link>
            </li>
            <li>
              <Link to="Blogs">Blogs </Link>
            </li>
            <li>
              <Link to="contact">contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;