import React, { useState } from 'react';
import img01 from '../img/01.jpeg';
import img02 from '../img/02.jpg';
import img03 from '../img/03.JPG';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  position: absolute;
  z-index: -99;
  top: 0;
  left: 0;
`

function BackgroundImg(){

    const images = [img01, img02, img03];
    const imgIndex = Math.floor((Math.random() * images.length));

    return(
        <StyledImg src={images[imgIndex]}/>
    )
}

export default BackgroundImg;