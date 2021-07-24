import React, { useState } from "react";

import { Button, Container, Toast, Jumbotron, Carousel } from "react-bootstrap";
import BasicLayout from "../components/layout/BasicLayout";
import ImageSlider from "../components/common/ImageSlider";
import { mockImages, mockServices } from "../data/mockData";
import { ServicesGrid } from "../components/landingpage/business/ServicesGrid";
import { HighlightCircles } from "../components/landingpage/business/HighlightCircles";
import "./WelcomePage.scss";

//=============================================
export default function WelcomePage({}) {
  return (
    <BasicLayout>
      <Container fluid className="p-3 no-padding">
        <Jumbotron className="primary">
          <h1 className="header">ViAI</h1>
          <h3>Next-gen AI platform</h3>

          <p>
            <Button variant="success" size="lg">
              Get started
            </Button>
          </p>
          <HighlightCircles />
        </Jumbotron>
      </Container>
      <Container fluid className="no-padding">
        <Jumbotron className="secondary scrollbg">
          <Container>
            <ImageSlider images={mockImages} />
          </Container>
        </Jumbotron>
      </Container>
      <hr />
      <Container>
        <ServicesGrid servicesData={mockServices} />
      </Container>
    </BasicLayout>
  );
}
