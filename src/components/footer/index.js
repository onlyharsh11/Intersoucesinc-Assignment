import React from "react";
import * as Styled from "./styles";

const Footer = () => {
  return (
    <Styled.FooterSectionDiv>
      <Styled.FooterContaier>
        <Styled.FooterContaierLinks>
          <ul>
            <a href="#">ABOUT US</a>
          </ul>
          <ul>
            <a href="#">INDUSTRIES</a>
          </ul>
          <a>
            <ul>
              <img
                src="/images/logo/footerlogo.webp"
                style={{ width: "250px" }}
                alt="logo"
              />
            </ul>
          </a>
          <ul>
            <a href="#">CAPABILITIES</a>
          </ul>
          <Styled.FooterIcons>
            <a
              href="https://in.linkedin.com/company/intersources-inc"
              target="_blank"
            >
              <img src="/images/linkedin.svg" alt="icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <img src="/images/twitter.svg" alt="icon" />
            </a>
          </Styled.FooterIcons>
        </Styled.FooterContaierLinks>
      </Styled.FooterContaier>
    </Styled.FooterSectionDiv>
  );
};

export default Footer;
