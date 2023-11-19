import styled from "styled-components";

export const ServiceSectionDiv = styled.div`
  padding: 6rem 0 0;
  width: 100%;
  margin: 6rem 0 0;
`;
export const ServiceSectionContaier = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
export const ServiceRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;
export const ServiceBackDiv = styled.div`
  background-image: url("/images/serviceSide.png");
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  width: 15%;
  height: auto;
`;
export const FirstContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
`;
export const SecondContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 70%;
`;
export const ThirdContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 70%;
`;
export const MainContent = styled.div`
  width: 50%;
  padding: 5rem 2.5rem;
  h3 {
    color: #000;
    font-family: Space Grotesk;
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }
  p {
    color: hsla(0, 6%, 6%, 0.6);
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;
export const LearnBtn = styled.div`
  margin-top: 1.5rem;
  a {
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    color: #0582d2;
    text-align: center;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  img {
    filter: invert(40%) sepia(40%) saturate(2937%) hue-rotate(180deg)
      brightness(87%) contrast(96%);
  }
`;
export const InsightCont = styled.div`
  margin-top: 3rem;
  h4 {
    color: #0582d2;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin: 0.5rem 0;
  }
`;
export const InsightVariety = styled.div`
  display: flex;
  flex-direction: row;

  article {
    color: #110f0f;
    font-family: Space Grotesk !important;
    font-size: 16px !important;
    font-style: normal !important;
    font-weight: 500 !important;
    line-height: normal !important;
    text-transform: uppercase !important;
    margin-right: 2rem;
  }
`;
export const NextBackDiv = styled.div`
  background-image: url("/images/cloud.webp");
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  height: auto;
`;
export const UpNextBackDiv = styled.div`
  background-image: url("/images/cybersecurity.webp");
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  width: 65%;
  height: auto;
`;
export const ThridNextBackDiv = styled.div`
  background-image: url("/images/strategy.webp");
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  height: auto;
`;
export const FourthNextBackDiv = styled.div`
  background-image: url("/images/talent.jpg");
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  width: 65%;
  height: auto;
`;
