import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    return (
      <div id="services">
        <div className="container">
          <div className="row">
            <div className="service-title text-center">
              <h4>OUR SERVICES</h4>
              <h2>Services We Provide</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="service-item text-center">
                <div className="service-item-icon text-center">
                  <img src="./images/fluoride.png" alt="" />
                </div>
                <div className="service-item-info">
                  <h3>Fluoride Treatment</h3>
                  <p>
                    Lorem Ipsum is simply dummy printing and typesetting indust
                    Ipsum has been the
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item text-center">
                <div className="service-item-icon text-center">
                  <img src="./images/cavity.png" alt="" />
                </div>
                <div className="service-item-info">
                  <h3>Cavity Filling</h3>
                  <p>
                    Lorem Ipsum is simply dummy printing and typesetting indust
                    Ipsum has been the
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item text-center">
                <div className="service-item-icon text-center">
                  <img src="./images/whitening.png" alt="" />
                </div>
                <div className="service-item-info">
                  <h3>Teath Whitening</h3>
                  <p>
                    Lorem Ipsum is simply dummy printing and typesetting indust
                    Ipsum has been the
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="onYourTerms">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="onYourTerms-img">
                  <img src="./images/treatment.png" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="onYourTerms-content">
                  <h1>Exceptional Dental Care, on Your Terms</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsumis that it has a
                    more-or-less normal distribution of letters,as opposed to
                    using ‘Content here, content here’, making it look like
                    readable English. Many desktop publishing packages and web
                    page{" "}
                  </p>
                  <Link to="/learn-more" className="primary-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;