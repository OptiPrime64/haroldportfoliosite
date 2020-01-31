import React from "react";
import Title from "./components/Title";
import "./css/styles.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutme from "./components/Aboutme";


export default function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Title />
        <Aboutme />
      </Router>
    </React.Fragment>
  );
}