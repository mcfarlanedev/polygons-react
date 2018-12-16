import React from "react";
import ReactDOM from "react-dom";
import PolygonGrid from "./PolygonGrid";
import styled, { ThemeProvider } from "styled-components";

import "./styles.css";

const theme = {
  bannerHeight: 200
};

const Banner = styled.div`
  overflow: hidden;
  // height: ${props => props.theme.bannerHeight}px
  background: #383833;
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Banner>
          <PolygonGrid />
        </Banner>
      </ThemeProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
