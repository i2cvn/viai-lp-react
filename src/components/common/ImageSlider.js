import React, { useState } from "react";

import {
  Button,
  Container,
  Toast,
  Jumbotron,
  Carousel,
  Row,
  Col
} from "react-bootstrap";

export default function ImageSlider({ images, width, height }) {
  return (
    <Carousel>
      {(images || []).map((imgData, index) => (
        <Carousel.Item key={imgData.id || index}>
          <img
            className="d-block w-100"
            src={imgData.url}
            alt={imgData.title}
          />
          <Carousel.Caption>
            <h3>{imgData.title}</h3>
            <p>{imgData.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
