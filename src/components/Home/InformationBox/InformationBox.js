import React from 'react';
import './InformationBox.css';
import { GoClock } from 'react-icons/go';
import { MdLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const InformationBox = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="info-box">
              <div className="info-box-icon">
                <span>
                  <GoClock />
                </span>
              </div>
              <div className="info-box-details">
                <h3>Opening Hours</h3>
                <p>Lorem Ipsum is simply dummy text of the pri</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-box active">
              <div className="info-box-icon">
                <span>
                  <MdLocationOn />
                </span>
              </div>
              <div className="info-box-details">
                <h3>Visit our location</h3>
                <p>Brooklyn, NY 10036, United States</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-box">
              <div className="info-box-icon">
                <span>
                  <FiPhoneCall />
                </span>
              </div>
              <div className="info-box-details">
                <h3>Contact us now</h3>
                <p>+000 123 456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default InformationBox;