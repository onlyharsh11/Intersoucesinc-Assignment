import React from "react";
import * as Styled from "./style";

const Section = () => {
  return (
    <Styled.SectionContainer>
      <Styled.TextSubsection>
        <Styled.OverDiv>
          <div>
            <h2>About Us</h2>
            <p>
              InterSources Inc. was founded in 2007 as a solution hub to help
              clients with intelligent data across various domains and
              industries. We are a Global Software Consultancy solving complex
              problems with technology. We have expertise in areas covering
              Artificial Intelligence, Techstack Migration, Custom Software
              Development, Infrastructure & Cloud Solutions, Cyber Security
              Services, etc.
            </p>
            <Styled.AboutPointer>
              <div>
                <img src="/images/checkicon.png" alt="check" />
                <article>100% Cyber Solutions</article>
              </div>
              <div>
                <img src="/images/checkicon.png" alt="check" />
                <article>Talented R&D Team</article>
              </div>
            </Styled.AboutPointer>
            <Styled.Box>
              <a>
                Learn More
                <img src="images/right-arrow.svg" alt="arrow" />
              </a>
            </Styled.Box>
          </div>
        </Styled.OverDiv>
      </Styled.TextSubsection>
      <Styled.ImageSubsection>
        <img src="/images/about.webp" alt="Section Image" />
        {/* Add your image path */}
      </Styled.ImageSubsection>
    </Styled.SectionContainer>
  );
};

export default Section;
