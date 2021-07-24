import React, { useState } from "react";

import { Button, Container, Toast, Jumbotron } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.scss";
import WelcomePage from "./pages/WelcomePage";
import appConfig from "./config/appConfig";

const App = () => (
  <>
    <Helmet>
      <title>{appConfig.title}</title>
    </Helmet>
    <Router>
      <Switch>
        <Route path="/" exact component={WelcomePage} />
      </Switch>
    </Router>
  </>
);

export default App;
