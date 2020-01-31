import React from "react";
import styled from "styled-components";
import mm from "../assets/mm.png";
import flash from "../assets/flash.png";
import capmarvel from "../assets/capmarvel.png";
import capatom from "../assets/capatom.png";


function Portfolio() {
    return (


        <div class="row" id="sectionportfolio">
            <div class="container col-sm-6 col-md-4 col-lg-3">
                <div class="thumb">
                    <div class="crop">
                        <img src={mm} alt="Martian Manhunter" />
                    </div>
                    <h6>MARTIAN MANHUNTER</h6>
                </div>
            </div>

            <div class="container col-sm-6 col-md-4 col-lg-3">
                <div class="thumb">
                    <div class="crop">
                        <img src={flash} alt="Flash" />
                    </div>
                    <h6>FLASH</h6>
                </div>
            </div>
            <div class="container col-sm-6 col-md-4 col-lg-3">
                <div class="thumb">
                    <div class="crop">
                        <img src={capmarvel} alt="Captain Marvel" />
                    </div>
                    <h6>CAPTAIN MARVEL</h6>
                </div>
            </div>
            <div class="container col-sm-6 col-md-4 col-lg-3">
                <div class="thumb">
                    <div class="crop">
                        <img src={capatom} alt="Captain Atom" />
                    </div>
                    <h6>CAPTAIN ATOM</h6>
                </div>
            </div>
        </div>





    );
}

export default Portfolio;