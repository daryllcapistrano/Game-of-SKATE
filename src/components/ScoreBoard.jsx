import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core/";

export default function ScoreBoard(props) {
  if (props.playerOne === 0 || props.playerTwo === 0) {
    return (
      <Container>
        <StyledP>_ _ _ _ _</StyledP>
      </Container>
    );
  }
  if (props.playerOne === 1 || props.playerTwo === 1) {
    return (
      <Container>
        <StyledP>S _ _ _ _</StyledP>
      </Container>
    );
  }
  if (props.playerOne === 2 || props.playerTwo === 2) {
    return (
      <Container>
        <StyledP>S K _ _ _</StyledP>
      </Container>
    );
  }
  if (props.playerOne === 3 || props.playerTwo === 3) {
    return (
      <Container>
        <StyledP>S K A _ _ </StyledP>
      </Container>
    );
  }
  if (props.playerOne === 4 || props.playerTwo === 4) {
    return (
      <Container>
        <StyledP>S K A T _ </StyledP>
      </Container>
    );
  }
  if (props.playerOne === 5 || props.playerTwo === 5) {
    return (
      <Container>
        <StyledP>S K A T E</StyledP>
      </Container>
    );
  }
}

const StyledP = styled.p`
  color: #ba1200;
  font-size: 2rem;
`;
