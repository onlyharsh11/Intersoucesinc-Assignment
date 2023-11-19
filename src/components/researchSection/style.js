import styled from "styled-components";

export const ResarchSectionDiv = styled.div`
  width: 100%;
  background-image: url("/images/resarch.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
`;
export const ResearchContaier = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  padding: 2rem 7.125rem;
  h4 {
    color: #fff;
    font-family: Space Grotesk;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 1rem;
  }
  article {
    position: absolute;
    top: 7%;
    left: 6%;
    margin-bottom: 10px;
    text-align: center;
    font-family: Space Grotesk !important;
    font-size: 72px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: normal !important;
    text-transform: uppercase;
    -webkit-text-stroke: 1px #fff !important;
    opacity: 0.3 !important;
    color: transparent !important;
    z-index: 0;
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
