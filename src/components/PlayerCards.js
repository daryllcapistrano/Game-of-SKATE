import React, { useState } from 'react';
import styled from 'styled-components';

import { Card, CardActions, CardContent, ButtonGroup, Container, Grid } from '@material-ui/core/';

import Display from './Display';
import ScoreBoard from './ScoreBoard';
import ActionButton from './ActionButton';

const StyledContainer = styled(Container)`
	text-align: center;
	padding: 15px
`;

const StyledGrid = styled(Grid)`
	text-align: -webkit-center;
	padding: 15px;
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

export default function ScoreCards() {
	const [ playerOne, setPlayerOne ] = useState(0);
	const [ playerTwo, setPlayerTwo ] = useState(0);

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
		<React.Fragment>
			<Container>
				<Display playerOne={playerOne} playerTwo={playerTwo} />
				<Grid container>
					<StyledGrid item xs={12} sm={6}>
						<StyledCard raised={true}>
							<StyledCardContent>
								<strong>Player 1</strong>
								<ScoreBoard playerOne={playerOne} />
							</StyledCardContent>
							<StyledCardActions>
								<ButtonGroup>
									<ActionButton handleClick={landedCounter} disabled={isEnabled} text="Landed" />
									<ActionButton handleClick={missedLeft} disabled={isEnabled} text="Missed" />
									<ActionButton handleClick={removeLetterLeft} disabled={isEnabled} text="Undo Letter" />
								</ButtonGroup>
							</StyledCardActions>
						</StyledCard>
					</StyledGrid>
					<StyledGrid item xs={12} sm={6}>
						<StyledCard raised={true}>
							<StyledCardContent>
								<strong>Player 2</strong>
								<ScoreBoard playerTwo={playerTwo} />
							</StyledCardContent>
							<StyledCardActions>
								<ButtonGroup>
									<ActionButton handleClick={landedCounter} disabled={isEnabled} text="Landed" />
									<ActionButton handleClick={missedRight} disabled={isEnabled} text="Missed" />
									<ActionButton handleClick={removeLetterRight} disabled={isEnabled} text="Undo Letter" />
								</ButtonGroup>
							</StyledCardActions>
						</StyledCard>
					</StyledGrid>
					<StyledContainer>
						<ActionButton handleClick={resetGame} text="Reset Game" />
					</StyledContainer>
				</Grid>
			</Container>
		</React.Fragment>
	);
}
