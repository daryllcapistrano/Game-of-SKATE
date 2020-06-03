import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Display from './Display';
import ScoreBoard from './ScoreBoard';
import ActionButton from './ActionButton';

const StyledContainer = styled(Container)`
	text-align: center;
	padding: 15px
`;

const StyledGrid = styled(Grid)`
	padding: 15px
`;

const StyledCardContent = styled(CardContent)`
	text-align: center;
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
				<StyledContainer>
					<ActionButton handleClick={resetGame} text="Reset Game" />
				</StyledContainer>
				<Grid container>
					<StyledGrid item xs={12} sm={6}>
						<Card raised={true}>
							<StyledCardContent>
								<strong>Player 1</strong>
								<ScoreBoard playerOne={playerOne} />
							</StyledCardContent>
							<CardActions>
								<ButtonGroup>
									<ActionButton handleClick={landedCounter} disabled={isEnabled} text="Landed" />
									<ActionButton handleClick={missedLeft} disabled={isEnabled} text="Missed" />
									<ActionButton handleClick={removeLetterLeft} disabled={isEnabled} text="Undo Letter" />
								</ButtonGroup>
							</CardActions>
						</Card>
					</StyledGrid>
					<StyledGrid item xs={12} sm={6}>
						<Card raised={true}>
							<StyledCardContent>
								<strong>Player 2</strong>
								<ScoreBoard playerTwo={playerTwo} />
							</StyledCardContent>
							<CardActions>
								<ButtonGroup>
									<ActionButton handleClick={landedCounter} disabled={isEnabled} text="Landed" />
									<ActionButton handleClick={missedRight} disabled={isEnabled} text="Missed" />
									<ActionButton handleClick={removeLetterRight} disabled={isEnabled} text="Undo Letter" />
								</ButtonGroup>
							</CardActions>
						</Card>
					</StyledGrid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}
