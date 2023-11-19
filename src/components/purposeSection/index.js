import React from "react";
import * as Styled from "./style";

const PurposeSection = () => {
  return (
    <Styled.PurposeBack>
      <Styled.Purposecontaier>
        <Styled.PurposeSingle>
          <h3>Purose</h3>
          <article>Purpose</article>
          <p>
            We exist to revolutionize businesses through IT, Digital Cloud, and
            Digital Transformation. By leveraging cutting-edge technology and
            Cloud solutions, we drive growth, enhance efficiency, and ensure
            competitiveness.
          </p>
        </Styled.PurposeSingle>
        <Styled.PurposeSingle>
          <h3>MISSION & VISION</h3>
          <article>ASPIRATION</article>
          <p>
            To be recognized globally as an innovative and cost-effective
            Digital Transformation provider and be instrumental in providing
            opportunities to Employees, Customers and Stakeholders.
          </p>
        </Styled.PurposeSingle>
      </Styled.Purposecontaier>
    </Styled.PurposeBack>
  );
};

export default PurposeSection;
