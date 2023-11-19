import styled from "styled-components";

export const FormSectionDiv = styled.div`
    width: 100%;
    background: #1c523e;
    position: relative;
}
`;
export const FormContaier = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-between;
  padding: 4rem 7rem;
`;
export const MainForm = styled.div`
  padding: 40px;
  background: #fff;
`;
export const formGruup = styled.div`
display: flex;
    gap: 16px;
margin-bottom: 1rem;
input {
    background: #f5f5f5;
    border: none;
    padding: 12.5px 24px;
    border-radius: 0;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0;
    text-align: left;
    width: 100%;
}
textarea {
    background: #f5f5f5;
    border: none;
    padding: 12.5px 24px;
    border-radius: 0;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0;
    text-align: left;
    width: 100%;
`;
export const OtherContent = styled.div`
  padding: 30px;
  h4 {
    color: #fff;
    text-align: right;
    font-family: Space Grotesk;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 54px;
    text-transform: uppercase;
    margin-bottom: 0;
    margin-top: -1rem;
  }
  article {
    position: absolute;
    top: 4%;
    right: 1%;
    text-align: center;
    font-family: Space Grotesk;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    -webkit-text-stroke: 1px #fff;
    opacity: 0.3;
    color: transparent;
    z-index: 0;
  }
  p {
    color: hsla(0, 0%, 100%, 0.5);
    font-family: Manrope;
    text-align: right;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    margin-top: 1rem;
  }
`;
export const FormImage = styled.div`
  margin-top: 3rem;
  img {
    max-width: 100%;
    height: auto;
    color: transparent;
  }
`;
