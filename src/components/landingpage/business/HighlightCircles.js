import React from "react";
import { Row, Col } from "react-bootstrap";
import "./HighlightCircles.scss";

export function HighlightCircles({}) {
  return (
    <div className="d-sm-none">
      <Row>
        <Col />
        <Col lg={3}>
          <CircleButton text={"Machine learning"} />
        </Col>
        <Col />
        <Col lg={3}>
          <CircleButton text={"Virtual Assistant"} left />
        </Col>
        <Col />
      </Row>
      <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Col />
        <Col lg={3}>
          <CircleButton text={"Image recognition"} />
        </Col>
        <Col className="text-center">
          <span className="title-art cyber-glow-01">AI</span>
        </Col>
        <Col lg={3}>
          <CircleButton text={"Customer Insight"} left />
        </Col>
        <Col />
      </Row>
      <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Col />
        <Col lg={3}>
          <CircleButton text={"Market Analytics"} />
        </Col>
        <Col />
        <Col lg={3}>
          <CircleButton text={"Creative Products"} left />
        </Col>
        <Col />
      </Row>
    </div>
  );
}
function CircleButton({ text, left, imgUrl }) {
  return (
    <div
      className={
        "d-flex btn rounded long " + (left ? "text-left" : "text-right")
      }
    >
      {!left && <h4 class="mr-auto p-3">{text}</h4>}
      <img
        className="rounded-circle"
        src={imgUrl || `https://placeimg.com/100/100/any`}
        alt=""
      />
      {left && <h4 className="mr-auto p-3">{text}</h4>}
    </div>
  );
}
