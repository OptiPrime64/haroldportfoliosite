import React from "react";

export default function Title(){
  return (
    <div id="sectionhome" className="introdiv">
      <div className="container">
        <div className="row">
          <div className="col" lg={6}>
            <img
              src="https://st2.depositphotos.com/3752757/5284/v/950/depositphotos_52843577-stock-illustration-working-hard-on-laptop-in.jpg"
              alt="At Laptop"
              height="350"
              width="350"
            />
          </div>
          <div className="col myName" lg={6}>
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