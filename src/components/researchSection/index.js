import React from "react";
import * as Styled from "./style";

const ReseacrhSection = () => {
  return (
    <Styled.ResarchSectionDiv>
      <Styled.ResearchContaier>
        <article>Research</article>
        <h4>
          Research & Development <br /> Program
        </h4>
        <Styled.Box>
          <a>
            Learn More
            <img src="images/right-arrow.svg" alt="arrow" />
          </a>
        </Styled.Box>
      </Styled.ResearchContaier>
    </Styled.ResarchSectionDiv>
  );
};

export default ReseacrhSection;
