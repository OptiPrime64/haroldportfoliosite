import React from "react";
import artindex from "../artIndex";
import CroppedImage from "./CroppedImage";
import { Link } from "react-router-dom";
import styled from "styled-components";

function createArt(impArt) {
    return (
        <CroppedImage
            img={impArt.img}
            name={impArt.name}
        />
    );
}

function Portfolio() {
    return (
        <Link to="/fullartpage">
        <div class="row" id="sectionportfolio">
        
            {artindex.map(createArt)}
           
        </div>
        </Link>
    );
}

export default Portfolio;