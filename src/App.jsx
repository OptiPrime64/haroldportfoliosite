import React, { useState } from "react";
import MainPage from "./components/MainPage";
import NavigationBar from "./components/NavigationBar";
import Title from "./components/Title";
import Aboutme from "./components/Aboutme";
import FullArtPage from "./components/FullArtPage";
import Portfolio from "./components/Portfolio";
import "./css/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Onbutton from "./components/Onbutton";
import Popup3 from "./components/Popup3";
import Contact from "./components/Contact";



export default function App() {



  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Title />
        <Portfolio />
        <Aboutme />
        <Contact />
      </Router>
    </React.Fragment>
  );
}






{/* <Switch>
<Route exact path="/" component={Home} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route component={NoMatch} />
</Switch> */}


