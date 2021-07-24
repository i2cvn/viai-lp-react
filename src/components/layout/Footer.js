import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";

import "./Footer.scss";

import appConfig from "../../config/appConfig";

export default function MyFooter({}) {
  return (
    <Container fluid className="my-footer">
      <Container>
        <Row>
          <Col>
            <img src={appConfig.logo} height="40px" alt="logo" />
            {appConfig.name} - {appConfig.copyright} - {appConfig.author}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
