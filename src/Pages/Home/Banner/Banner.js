import React, { useState } from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption className="caption">
          <h3>Download upto 1Gbps</h3>
          <p>
            You can get the download speed upto 1GbPs. Which is provided by us.
            It's Boast Net
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption  className="caption">
          <h3>99% Internet Uptime</h3>
          <p>
            You get the most speed of internet and none drop service in Boast
            Net
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption  className="caption">
          <h3>24/7 Customer Support</h3>
          <p>
            In Every moment you find us in support.Every time every situation
            provide service.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
