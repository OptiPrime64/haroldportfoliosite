import React from "react";
import { Link } from "react-router-dom";

// function displayMes(){
//     return(
//     console.log("It worked!")
//     ); 
// }

export default function Onbutton(fromApp) {

    function pressed() {
        fromApp.turnOn();
    }

    return (

        <div>

            <button onClick={pressed}>Turn ON</button>

        </div>
    );
}