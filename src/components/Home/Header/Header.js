import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div className="header">
        <div
          className="header-left"
          style={{ backgroundImage: "url('images/bg.png')" }}
        >
          <div className="header-content">
            <h2 className="header-title">Your New Smile Starts Here</h2>
            <p className="header-des">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the
            </p>
            <Link to="/appointment" className="primary-btn">
              get appointment
            </Link>
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-img">
            <img src="./images/chair.png" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Header;