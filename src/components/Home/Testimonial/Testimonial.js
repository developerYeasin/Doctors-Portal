import React from "react";
import TestSlider from "./TestSlider/TestSlider";
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="testimonial-title">
            <h4>TESTIMONIAL</h4>
            <h2>What’s Our Patients Says</h2>
          </div>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="test-coma-icon">
            <img src="./images/comaIcon.png" alt="" />
          </div>
        </div>
      </div>
      <TestSlider />
    </div>
  );
};

export default Testimonial;
