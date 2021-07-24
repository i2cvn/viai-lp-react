import React, { useState, useEffect } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import appConfig from "../../config/appConfig";
import "./Navbar.scss";

export default function MyNavbar({}) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand>
          <Link to="/">
            <img src={appConfig.logo} height="40px" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <NavDropdown title="Components" id="basic-nav-dropdown">
              <NavDropdown.Item>ViVoice</NavDropdown.Item>
              <NavDropdown.Item>ViBot</NavDropdown.Item>
              <NavDropdown.Item>ViDocs</NavDropdown.Item>
              <NavDropdown.Item>ViScan</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Open Dataset</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="New" id="basic-nav-dropdown">
              <NavDropdown.Item>AI Ops</NavDropdown.Item>
              <NavDropdown.Item>AI Pipeline</NavDropdown.Item>
              <NavDropdown.Item>AI Dataset</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>AI App</NavDropdown.Item>
              <NavDropdown.Item>AI Diagram</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/addons">APIs</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/help">Help</Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="info">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <NavDropdown alignRight title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item>User</NavDropdown.Item>
              <NavDropdown.Item>Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
