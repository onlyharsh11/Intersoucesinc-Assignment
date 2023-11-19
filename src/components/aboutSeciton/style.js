import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const OverDiv = styled.div`
  position: relative;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  text-align: center;
  margin-top: 13rem;

  &::before {
    content: "WHO WE ARE";
    font-size: 82px;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 16rem;
    transform: translateX(-50%);
    opacity: 1;
    z-index: -1;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #000;
  }
  h2{
    font-family: Space Grotesk,sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 51px;
    font-size: 2rem;
    margin-bottom: 20px;
    line-height: 70px;
    color:#000;
    text-align: left;
    padding-top: 3.5rem;
}

  }
  p{
    text-align: justify;
    color: #110f0f;
    font-family: Poppins,sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    margin-top: 1rem;
    text-wrap: wrap;
  }

`;

export const TextSubsection = styled.div`
  width: 47%;
  margin-top: -15rem;
  padding: 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ImageSubsection = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: 500px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px; /* Optional: Add margin for spacing on small screens */
  }
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
