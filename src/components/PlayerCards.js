import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Display from './Display';
import ScoreBoard from './ScoreBoard';
import ActionButton from './ActionButton';

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
				<Container>
					<Display playerOne={playerOne} playerTwo={playerTwo} />
				</Container>
				<Grid container>
					{/* begin player one */}
					<Grid item style={{ padding: `10px` }}>
						<Paper elevation={2}>
							<Container style={{ textAlign: `center`, padding: `15px` }}>
								<Container style={{ padding: `15px` }}>
									<ScoreBoard playerOne={playerOne} />
								</Container>
								<ActionButton handleClick={landedCounter} disabled={isEnabled} text="Landed" />
								<ActionButton handleClick={missedLeft} disabled={isEnabled} text="Missed" />
								<ActionButton handleClick={removeLetterLeft} disabled={isEnabled} text="Remove A Letter" />
							</Container>
						</Paper>
					</Grid>
					{/* end player one */}
					{/* begin player two */}
					<Grid item style={{ padding: `10px` }}>
						<Paper elevation={2}>
							<Container style={{ textAlign: `center`, padding: `15px` }}>
								<Container style={{ padding: `15px` }}>
									<ScoreBoard playerTwo={playerTwo} />
								</Container>
								<Container>
									<ActionButton handleClick={landedCounter} disabled={isEnabled} text="Landed" />
									<ActionButton handleClick={missedRight} disabled={isEnabled} text="Missed" />
									<ActionButton handleClick={removeLetterRight} disabled={isEnabled} text="Remove A Letter" />
								</Container>
							</Container>
						</Paper>
					</Grid>
					{/* end player two */}
				</Grid>
				<Container>
					<ActionButton handleClick={resetGame} text="Start New Game" />
				</Container>
			</Container>
		</React.Fragment>
	);
}
