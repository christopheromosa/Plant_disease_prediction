import React from "react";
// import styles from './CarouselComponents.modal.css'
import Carousel from "react-bootstrap/Carousel";
const CarouselComponents = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            src="./images/plant_leaf.jpeg"
            className="d-block w-100"
            style={{ minHeight: "10rem", width: "auto" }}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="./images/plant_leaf.jpeg"
            className="d-block w-100"
            style={{ minHeight: "10rem", width: "auto" }}
            alt="Second Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="./images/plant_leaf.jpeg"
            className="d-block w-100"
            style={{ minHeight: "10rem", width: "auto" }}
            alt="Third Slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponents;
