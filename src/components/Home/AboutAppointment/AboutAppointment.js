import React from 'react';
import { Link } from 'react-router-dom';
import './AboutAppointment.css';

const AboutAppointment = () => {
    return (
      <div
        className="aboutAppointment"
        style={{ backgroundImage: `url('./images/appointment-bg.png')` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div
                className="aboutAppointment-img"
              >
                <img src="./images/doctor.png" alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="aboutAppointment-content">
                <h4>APPOINTMENT</h4>
                <h2>Make an appointment Today</h2>
                <p>
                  It is a long established fact that a reader will be
                  distractedby the readable content of a page when looking at
                  its
                </p>
                <Link to="/learn-more" className="primary-btn">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutAppointment;