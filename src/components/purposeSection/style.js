import styled from "styled-components";

export const PurposeBack = styled.div`
  background-image: url("/images/purposebg.jpg");
  background-size: auto;
  background-position: 50%;
  background-repeat: no-repeat;
  margin: 0 0 -8rem;
  position: relative;
  height: 80vh;
  width: 100%;
`;
export const Purposecontaier = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-around;
  padding: 6rem 0;
  position: absolute;
  top: 0;
  left: 10px;
  right: 0;
  bottom: 0;
  max-width: 1300px;
`;
export const PurposeSingle = styled.div`
padding: 30px 24px;
    background: #fff;
    width: 544px;
    border: 2px double #0085ffb2;
    border-top-left-radius: 55px;
    border-bottom-right-radius: 55px;
    -webkit-clip-path: polygon(0 0,100% 0,100% 92%,93% 100%,0 100%,0 10%);
    position: relative;
    &:first-child {
        margin-top: -12rem;
      }
    
      /* Style for the last child */
      &:last-child {
        margin-top: 10rem;
      }
    h3 {
        color: #110f0f;
        font-family: Space Grotesk,sans-serif;
        font-size: 42px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        text-align: center;
        margin: 4rem 0 2rem;
    }

    article {
        position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: Space Grotesk,sans-serif;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #000;
    z-index: -10;
    }
   p {
        color: #110f0f;
        text-align: center;
        font-family: Poppins,sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
`;
export const AboutPointer = styled.div`
  display: flex;
  margin-top: 2rem;
  div {
    display: flex;
    align-items: center;
    margin-right: 2rem;
  }
  img {
    margin-right: 0.75rem;
  }
  article {
    color: #110f0f;
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;
export const Box = styled.div`
width: fit-content;
--c: #000;
box-shadow: 0 0 0 0.1em inset var(--c);
--_g: linear-gradient(var(--c) 0 0) no-repeat;
background: var(--_g) calc(var(--_p, 0%) - 100%) 0,var(--_g) calc(200% - var(--_p, 0%)) 0,var(--_g) calc(var(--_p, 0%) - 100%) 100%,var(--_g) calc(200% - var(--_p, 0%)) 100%;
background-size: 50.5% calc(var(--_p, 0%) / 2 + .5%);
outline-offset: 0.1em;
transition: background-size .4s,background-position 0s .4s;
display:flex;
align-items: center;
color: #000;
    font-family: Poppins;
    font-weight: lighter;
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
