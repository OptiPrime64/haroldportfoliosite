import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

function CroppedImage(fromPort) {

    function fromCrop() {
        fromPort.croptoPort();
      }


    return (

        <div class="container col-sm-6 col-md-4 col-lg-3">
    
                <div class="thumb">
                    <div class="crop">
                        <img onClick={fromCrop} src={fromPort.img} alt={fromPort.name} />
                    </div>
                    <h6>{fromPort.name}</h6>
                </div>
           

        </div>

    );
}

export default CroppedImage;

