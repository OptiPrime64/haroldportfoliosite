import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Portfolio(fromApp) {
    return (

        <div class="container col-sm-6 col-md-4 col-lg-3">
            
                <div class="thumb">
                    <div class="crop">
                        <img src={fromApp.img} alt={fromApp.name} />
                    </div>
                    <h6>{fromApp.name}</h6>
                </div>
           

        </div>

    );
}

export default Portfolio;