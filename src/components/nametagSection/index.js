import React from "react";
import * as Styled from "./style";

const NameTagSection = () => {
  return (
    <Styled.NameTagSectionDiv>
      <Styled.NameTagSectionContaier>
        <h2>IDPass</h2>
        <article>Identity Platform</article>
        <p>
          Surround your MFA with secure enrollment and recovery for every user,
          or use our Helpdesk Copilot to verify any customer or employee with
          certainty – in just one click.
        </p>
        <Styled.NameTagDetect>
          <article>Detect and Prevent</article>
          <ul>
            <li>Deepfakes</li>
            <li>Synthetic ID fraud</li>
            <li>Account Takeovers</li>
            <li>Social Engineering</li>
          </ul>
        </Styled.NameTagDetect>
        <Styled.Box>
          <a>
            Learn More
            <img src="images/right-arrow.svg" alt="arrow" />
          </a>
        </Styled.Box>
      </Styled.NameTagSectionContaier>
    </Styled.NameTagSectionDiv>
  );
};

export default NameTagSection;
