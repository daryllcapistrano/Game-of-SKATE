import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Greeting from './Greeting';
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
			<Container style={{ marginTop: `150px` }}>
				<Container>
					<Greeting playerOne={playerOne} playerTwo={playerTwo} />
					<ActionButton handleClick={resetGame} text="Start New Game" />
				</Container>
				<Grid container>
					{/* begin player one */}
					<Grid item style={{ padding: `10px` }}>
						<Paper elevation={2}>
							<Container style={{ textAlign: `center`, padding: `15px` }}>
								<Container style={{ padding: `15px` }}>
									<ScoreBoard playerOne={playerOne} />
								</Container>
								<Grid container>
									<Grid item xs={6}>
										<ActionButton handleClick={landedCounter} disabled={isEnabled} text="Landed" />
									</Grid>
									<Grid item xs={6}>
										<ActionButton handleClick={missedLeft} disabled={isEnabled} text="Missed" />
									</Grid>
									<Grid item xs={12}>
										<ActionButton handleClick={removeLetterLeft} disabled={isEnabled} text="Remove A Letter" />
									</Grid>
								</Grid>
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
									<Grid container>
										<Grid item xs={6}>
											<ActionButton handleClick={landedCounter} disabled={isEnabled} text="Landed" />
										</Grid>
										<Grid item xs={6}>
											<ActionButton handleClick={missedRight} disabled={isEnabled} text="Missed" />
										</Grid>
										<Grid item xs={12}>
											<ActionButton handleClick={removeLetterRight} disabled={isEnabled} text="Remove A Letter" />
										</Grid>
									</Grid>
								</Container>
							</Container>
						</Paper>
					</Grid>
					{/* end player two */}
				</Grid>
			</Container>
		</React.Fragment>
	);
}
