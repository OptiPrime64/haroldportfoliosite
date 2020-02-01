import React from "react";
import Title from "./Title";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutme from "./Aboutme";
import Portfolio from "./Portfolio";


export default function MainPage() {
  return (
    <React.Fragment>
      <Router>   
        <Title />
        <Portfolio />
        <Aboutme />
      </Router>
    </React.Fragment>
  );
}


           
     