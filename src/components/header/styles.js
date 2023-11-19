// src/components/Header/styles.js
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem 1rem 5rem;
  background-color: #070b30;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  height: 60px;
  width: 300px;
  img {
    width: 100%;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  position: relative;
  margin-left: 18px;
  color: white;
  text-decoration: none;
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
    position: relative;

    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
      filter: invert(40%) sepia(100%) saturate(2937%) hue-rotate(180deg)
        brightness(100%) contrast(100%);
      border-bottom: 2px solid #fff; /* Add a line on hover, active, and focus */
    }
  }

  &:hover {
    text-decoration: none;
    > div {
      display: block;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;
export const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 210px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  p {
    margin: 0;
    color: #000000;
    font-weight: 400;
    font-size: 17px;
    padding: 5px;
    &:hover {
      filter: invert(40%) sepia(100%) saturate(2937%) hue-rotate(180deg)
        brightness(100%) contrast(100%);
    }
  }
`;
export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
