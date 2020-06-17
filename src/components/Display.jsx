import React from "react";
import styled from "styled-components";
import { Paper } from "@material-ui/core/";

export default function Display(props) {
  if (props.playerOne === 0 && props.playerTwo === 0) {
    return (
      <StyledPaper>
        <strong>Status:</strong> No Score Yet
      </StyledPaper>
    );
  }
  if (props.playerOne < 5 && props.playerTwo === 5) {
    return (
      <StyledPaper>
        <strong>Status:</strong> <Winner>Player One Wins</Winner>
      </StyledPaper>
    );
  }
  if (props.playerOne === 5 && props.playerTwo < 5) {
    return (
      <StyledPaper>
        <strong>Status:</strong> <Winner>Player Two Wins</Winner>
      </StyledPaper>
    );
  } else {
    return (
      <StyledPaper>
        <strong>Status:</strong> Session Is Progress
      </StyledPaper>
    );
  }
}

const StyledPaper = styled(Paper)`
  margin: auto;
  margin-bottom: 2rem;
  padding: 14px 28px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  width: fit-content;
`;

const Winner = styled.span`
  color: #deb841;
  font-size: 1rem;
`;
