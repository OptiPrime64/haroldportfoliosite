import React from "react";
import profimg from "../assets/profile_image.jpg";

export default function Title(){
  return (
    <div id="sectiontitle" className="introdiv">
      <div className="container">
        <div className="row">
          <div className="col col-img" lg={2}>
            <img
              // src="https://st2.depositphotos.com/3752757/5284/v/950/depositphotos_52843577-stock-illustration-working-hard-on-laptop-in.jpg"
              src={profimg}
              alt="Profile Image"
              // width="350"
            />
          </div>
          <div className="col myName" lg={10}>
            <h1>
              Harold <br /> Jennett
            </h1>
            <h2>Illustrator • Web Developer</h2>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}