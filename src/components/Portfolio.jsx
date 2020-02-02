import React from "react";
import artindex from "../artIndex";
import CroppedImage from "./CroppedImage";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FullArtPage from "./FullArtPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";






function Portfolio(fromMain) {

    function linkFromCrop() {
        fromMain.presslink();
    }


    function createArt(impArt) {
        return (
            <CroppedImage
                img={impArt.img}
                name={impArt.name}
                croptoPort={linkFromCrop}
            />
        );
    }

    return (

        <div class="row" id="sectionportfolio">
            {artindex.map(createArt)}
        </div>

    );
}

export default Portfolio;

