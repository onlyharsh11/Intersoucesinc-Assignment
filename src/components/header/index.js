import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import * as Styled from "./styles";

const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.Logo>
        <Link href="/">
          <img src="/images/logo/logo.webp" alt="Logo" />
        </Link>
      </Styled.Logo>
      <Styled.Navigation>
        <Styled.NavItem>
          <Link href="/">
            ABOUT
            <span className="dropdown-toggle-icon">
              &nbsp;
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </Link>
          <Styled.Dropdown>
            <p>About InterSources Inc.</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </Styled.Dropdown>
        </Styled.NavItem>
        <Styled.NavItem>
          <Link href="/about">
            CAPABILITIES
            <span className="dropdown-toggle-icon">
              &nbsp;
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </Link>
          <Styled.Dropdown>
            <p>Government Services</p>
            <p>Cyber Security</p>
            <p>Research & Development</p>
            <p>Cloud Operations</p>
            <p>Professional Services</p>
            <p>Digital Transformation</p>
          </Styled.Dropdown>
        </Styled.NavItem>
        <Styled.NavItem>
          <Link href="/services">
            PRODUCTS
            <span className="dropdown-toggle-icon">
              &nbsp;
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </Link>
          <Styled.Dropdown>
            <p>IDPass</p>
            <p>Mercury AI</p>
            <p>Kasm</p>
          </Styled.Dropdown>
        </Styled.NavItem>
        <Styled.NavItem>
          <Link href="/contact">PARTNERSHIP</Link>
        </Styled.NavItem>
        <Styled.NavItem>
          <Link href="/contact">BLOG</Link>
        </Styled.NavItem>
      </Styled.Navigation>
    </Styled.HeaderContainer>
  );
};

export default Header;
