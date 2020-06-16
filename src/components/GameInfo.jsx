import React from "react";
import { Container } from "@material-ui/core/";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  padding-top: 2rem;
`;

export default function GameInfo() {
  return (
    <React.Fragment>
      <StyledContainer>
        The game of S.K.A.T.E. is based on the old basketball game H.O.R.S.E.
        and was first played in the 70’s by vert skateboarding legends Neil
        Blender, and John Lucero. Later it was adopted to street skating and
        made famous by the worldwide eS Game of SKATE tournament and The
        Berrics’ game of skate called Battle at the Berrics.
      </StyledContainer>
      <br />
      <br />
    </React.Fragment>
  );
}
