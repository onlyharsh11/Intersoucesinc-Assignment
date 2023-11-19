// Import styled-components
import styled from "styled-components";

// Define styled components
export const HeroContainer = styled.section`
  position: relative;
  height: 750px;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/bg/bg.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 17%;
  transform: translateY(-50%);
  color: white;
  padding: 20px;
  height: fit-content;
  z-index: 2;

  h1 {
    font-size: 38px;
    font-weight: 500;
    line-height: 50px;
    color: #fff;
    font-family: Poppins, sans-serif;
    font-style: normal;
    margin-bottom: 20px;
  }

  p {
    max-width: 33rem;
    text-align: justify;
    font-size: 16px;
    line-height: 25px;
    color: #fff;
    font-family: Poppins, sans-serif;
    font-style: normal;
  }
`;
export const Box = styled.div`
width: fit-content;
--c: #fff;
box-shadow: 0 0 0 0.1em inset var(--c);
--_g: linear-gradient(var(--c) 0 0) no-repeat;
background-size: 50.5% calc(var(--_p, 0%) / 2 + .5%);
outline-offset: 0.1em;
transition: background-size .4s,background-position 0s .4s;
display:flex;
align-items: center;
color: #fff;
font-family: Poppins,sans-serif;
font-weight: 400;
padding: 13px 20px;
text-align: center;
text-transform: uppercase;
font-size: 15px;
font-style: normal;
line-height: normal;
margin-top: 2rem;

img{
    max-width: 24px;
    width: 100%;
    height: auto;
    margin-left: 0.75rem;
    filter: invert(40%) sepia(100%) saturate(2937%) hue-rotate(180deg) brightness(100%) contrast(100%);
    margin-bottom: -6px;
}
}
}
`;
