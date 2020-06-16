import React from "react";
import { Container } from "@material-ui/core/";

export default function ScoreBoard(props) {
  if (props.playerOne === 0 || props.playerTwo === 0) {
    return (
      <Container>
        <p>_ _ _ _ _</p>
      </Container>
    );
  }
  if (props.playerOne === 1 || props.playerTwo === 1) {
    return (
      <Container>
        <p>S _ _ _ _</p>
      </Container>
    );
  }
  if (props.playerOne === 2 || props.playerTwo === 2) {
    return (
      <Container>
        <p>S K _ _ _</p>
      </Container>
    );
  }
  if (props.playerOne === 3 || props.playerTwo === 3) {
    return (
      <Container>
        <p>S K A _ _ </p>
      </Container>
    );
  }
  if (props.playerOne === 4 || props.playerTwo === 4) {
    return (
      <Container>
        <p>S K A T _ </p>
      </Container>
    );
  }
  if (props.playerOne === 5 || props.playerTwo === 5) {
    return (
      <Container>
        <p>S K A T E</p>
      </Container>
    );
  }
}
