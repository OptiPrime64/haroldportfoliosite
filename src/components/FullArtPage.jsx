import React from "react";
import capmarvel from "../assets/capmarvel.png";
import "../css/styles.css";


export default function FullArtPage(fromApp) {

function backToMain(){
  fromApp.artTurnOn();
}

  return (
    <div className="divhuge">

      <div>
        <img className="huge" src={capmarvel} />
      </div>
      <button onClick={backToMain} >Return</button>




    </div>
  );
}


// href="/"