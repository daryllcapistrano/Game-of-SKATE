import React, { useState } from "react";
import styled from "styled-components";
import ActionButton from "./Buttons";
import GameStatus from "./Displays";

import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
} from "@material-ui/core/";

import ScoreBoard from "./ScoreBoard";
import GameInfo from "./GameInfo";

export default function ScoreCards() {
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);

  const isEnabled = playerOne === 5 || playerTwo === 5;

  const resetGame = () => {
    setPlayerOne(0);
    setPlayerTwo(0);
  };

  const landedCounter = () => {
    return null;
  };

  const missedLeft = () => {
    setPlayerOne(playerOne + 1);
  };
  const missedRight = () => {
    setPlayerTwo(playerTwo + 1);
  };

  const removeLetterLeft = () => {
    if (playerOne === 0) {
      return null;
    } else {
      setPlayerOne(playerOne - 1);
    }
  };

  const removeLetterRight = () => {
    if (playerTwo === 0) {
      return null;
    } else {
      setPlayerTwo(playerTwo - 1);
    }
  };

  return (
    <>
      <Container>
        <GameInfo />
        <GameStatus playerOne={playerOne} playerTwo={playerTwo} />
        <Grid container>
          <StyledGrid item xs={12} sm={6}>
            <StyledCard raised={true}>
              <StyledCardContent>
                <PlayerName>Player 1</PlayerName>
                <ScoreBoard playerOne={playerOne} />
              </StyledCardContent>
              <StyledCardActions>
                <ActionButton
                  handleClick={landedCounter}
                  disabled={isEnabled}
                  text="Landed"
                  color="primary"
                  variant="contained"
                />
                <ActionButton
                  handleClick={missedLeft}
                  disabled={isEnabled}
                  text="Missed"
                  color="primary"
                  variant="contained"
                />
                <ActionButton
                  handleClick={removeLetterLeft}
                  disabled={isEnabled}
                  text="Undo"
                  color="primary"
                  variant="contained"
                />
              </StyledCardActions>
            </StyledCard>
          </StyledGrid>
          <StyledGrid item xs={12} sm={6}>
            <StyledCard raised={true}>
              <StyledCardContent>
                <PlayerName>Player 2</PlayerName>
                <ScoreBoard playerTwo={playerTwo} />
              </StyledCardContent>
              <StyledCardActions>
                <ActionButton
                  handleClick={landedCounter}
                  disabled={isEnabled}
                  text="Landed"
                  color="primary"
                  variant="contained"
                />
                <ActionButton
                  handleClick={missedRight}
                  disabled={isEnabled}
                  text="Missed"
                  color="primary"
                  variant="contained"
                />
                <ActionButton
                  handleClick={removeLetterRight}
                  disabled={isEnabled}
                  text="Undo"
                  color="primary"
                  variant="contained"
                />
              </StyledCardActions>
            </StyledCard>
          </StyledGrid>
          <StyledContainer>
            <ActionButton
              handleClick={resetGame}
              text="Reset Game"
              color="secondary"
              variant="contained"
            />
          </StyledContainer>
        </Grid>
      </Container>
    </>
  );
}

const StyledContainer = styled(Container)`
  text-align: center;
  padding: 15px;
`;

const StyledGrid = styled(Grid)`
  text-align: -webkit-center;
  padding: 15px 0;
`;

const StyledCard = styled(Card)`
  max-width: 400px;
  max-height: 400px;
`;

const StyledCardContent = styled(CardContent)`
  text-align: center;
`;

const StyledCardActions = styled(CardActions)`
  justify-content: center;
`;

const PlayerName = styled.span`
  margin-top: 0;
  color: #0a0903;
  font-weight: bold;
`;
