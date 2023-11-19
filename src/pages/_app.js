import React from "react";
import * as Styled from "../styles/globalStyles";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Styled.GlobalStyles />
    </>
  );
};

export default App;
