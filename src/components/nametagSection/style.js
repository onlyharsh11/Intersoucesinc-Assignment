import styled from "styled-components";

export const NameTagSectionDiv = styled.div`
  background: #008f5a;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
`;
export const NameTagSectionContaier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 8rem 0;

  h2 {
    color: #fff;
    font-family: Space Grotesk, sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: bolder;
    line-height: normal;
    text-transform: uppercase;
    z-index: 10;
    margin: 0;
  }
  article {
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    text-align: center;
    font-family: Space Grotesk, sans-serif;
    font-size: 72px;
    font-weight: 700;
    -webkit-text-stroke: 1px #fff;
    opacity: 0.3;
    color: transparent;
    z-index: 0;
  }
  p {
    color: hsla(0, 0%, 100%, 0.75);
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    max-width: 700px;
    margin-top: 2rem;
  }
`;
export const NameTagDetect = styled.div`
  margin-top: 2rem;
  article {
    color: hsla(0, 0%, 100%, 0.7);
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    text-align: center;
    margin-top: 19rem;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    width: 700px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  li {
    font-style: normal;
    line-height: normal;
    text-transform: uppercase;
    color: #fff;
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 500;
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
