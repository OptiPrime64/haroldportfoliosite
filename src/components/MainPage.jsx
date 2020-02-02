import React from "react";
import Title from "./Title";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutme from "./Aboutme";
import Portfolio from "./Portfolio";


export default function MainPage(fromApp) {


  function pressed() {
    fromApp.turnOn();
  }


  return (
    <React.Fragment>
      <Router>
       
        <Title />
        <Portfolio
         presslink={pressed} 
        />
        <Aboutme />
      </Router>
    </React.Fragment>
  );
}



