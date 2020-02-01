import React from "react";
import artindex from "../artIndex";
import CroppedImage from "./CroppedImage";
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
        <div class="row" id="sectionportfolio">
            {artindex.map(createArt)}
        </div>
    );
}


export default Portfolio;