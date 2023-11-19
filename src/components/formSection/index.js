import React from "react";
import * as Styled from "./style";

const FormSection = () => {
  return (
    <Styled.FormSectionDiv>
      <Styled.FormContaier>
        <Styled.MainForm>
          <form>
            <Styled.formGruup>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </Styled.formGruup>
            <Styled.formGruup>
              <input type="tel" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </Styled.formGruup>
            <Styled.formGruup>
              <input type="email" placeholder="Email Address" />
            </Styled.formGruup>
            <Styled.formGruup>
              <textarea
                type="text"
                placeholder="Description"
                cols="3"
                rows="5"
              />
            </Styled.formGruup>
          </form>
        </Styled.MainForm>
        <Styled.OtherContent>
          <h4>How can we help you ?</h4>
          <article>JOIN US</article>
          <p>Get in touch today!</p>
          <Styled.FormImage></Styled.FormImage>
          <img src="/images/formimage.svg" alt="alt" />
        </Styled.OtherContent>
      </Styled.FormContaier>
    </Styled.FormSectionDiv>
  );
};

export default FormSection;
