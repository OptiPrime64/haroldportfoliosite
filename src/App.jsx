import React from "react";
import Title from "./components/Title";
import "./css/styles.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutme from "./components/Aboutme";
import Portfolio from "./components/Portfolio";


export default function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Title />
        <Portfolio />
        <Aboutme />
      </Router>
    </React.Fragment>
  );
}