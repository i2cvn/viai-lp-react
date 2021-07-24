import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

import Header from "./Header";
import Footer from "./Footer";
import MyNavbar from "./Navbar";

export default function BasicLayout({ children }) {
  return (
    <>
      <MyNavbar />
      {children}
      <Footer />
    </>
  );
}
