import React from "react";
import * as Styled from "./style";

const Hero = () => {
  return (
    <Styled.HeroContainer>
      <Styled.BackgroundImage />
      <div>
        <Styled.Content>
          <h1>Taking Technology to the World</h1>
          <p>
            Empowering global businesses with cutting-edge tech solutions. From
            catalyzing digital transformation to fortifying enterprise
            cybersecurity, and propelling technology-driven growth strategies.
            <br />
            <br />
            We partner with Fortune 500 and Startups alike at each step of the
            way.
          </p>
          <Styled.Box>
            <a>
              Learn More
              <img src="images/right-arrow.svg" alt="arrow" />
            </a>
          </Styled.Box>
        </Styled.Content>
      </div>
    </Styled.HeroContainer>
  );
};

export default Hero;
