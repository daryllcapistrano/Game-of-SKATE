import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <GameBoard />
    </React.Fragment>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background: url(https://www.brainpickings.org/wp-content/themes/brainpickings/images/bckgd_body.png);
    color: #000000;
	  font-family: 'Rubik', sans-serif;
    margin: 0
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
