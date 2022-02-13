import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './TestSlider.css';

const TestSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="test-slider">
      <Slider {...settings}>
        <div>
          <div className="slide-item">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using ‘Content here, content
            </p>
            <div className="user">
              <img src="./images/people-1.png" alt="" />
              <div className="user-name">
                <h5>Winson Herry</h5>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-item">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using ‘Content here, content
            </p>
            <div className="user">
              <img src="./images/people-2.png" alt="" />
              <div className="user-name">
                <h5>Winson Herry</h5>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-item">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using ‘Content here, content
            </p>
            <div className="user">
              <img src="./images/people-3.png" alt="" />
              <div className="user-name">
                <h5>Winson Herry</h5>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-item">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using ‘Content here, content
            </p>
            <div className="user">
              <img src="./images/people-1.png" alt="" />
              <div className="user-name">
                <h5>Winson Herry</h5>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-item">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using ‘Content here, content
            </p>
            <div className="user">
              <img src="./images/people-2.png" alt="" />
              <div className="user-name">
                <h5>Winson Herry</h5>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-item">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using ‘Content here, content
            </p>
            <div className="user">
              <img src="./images/people-3.png" alt="" />
              <div className="user-name">
                <h5>Winson Herry</h5>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TestSlider;
