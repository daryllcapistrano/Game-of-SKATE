import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import Greeting from '../components/Greeting';
import ScorekeeperDisplay from '../components/ScorekeeperDisplay';
import MaterialButton from '../components/MaterialButton';

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
	// refactor below to accept props
	const missedCounter = () => {
		setPlayerOne(playerOne + 1);
	};

	const missedCounterRight = () => {
		setPlayerTwo(playerTwo + 1);
	};

	const removeLetter = () => {
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
				<Greeting playerOne={playerOne} playerTwo={playerTwo} />
			</Container>
			<Paper elevation={2}>
				<Container style={{ textAlign: `center`, padding: `15px` }}>
					<Container style={{ padding: `15px` }}>
						<ScorekeeperDisplay playerOne={playerOne} />
					</Container>
					<Container>
						<MaterialButton handleClick={landedCounter} disabled={isEnabled} text="Landed" />
						<MaterialButton handleClick={missedCounter} disabled={isEnabled} text="Missed" />
						<MaterialButton handleClick={removeLetter} disabled={isEnabled} text="Remove A Letter" />
						<MaterialButton handleClick={resetGame} text="Start New Game" />
					</Container>
				</Container>
			</Paper>
			{/* start player two */}
			<Paper elevation={2}>
				<Container style={{ textAlign: `center`, padding: `15px` }}>
					<Container style={{ padding: `15px` }}>
						<ScorekeeperDisplay playerTwo={playerTwo} />
					</Container>
					<Container>
						<MaterialButton handleClick={landedCounter} disabled={isEnabled} text="Landed" />
						<MaterialButton handleClick={missedCounterRight} disabled={isEnabled} text="Missed" />
						<MaterialButton handleClick={removeLetterRight} disabled={isEnabled} text="Remove A Letter" />
						<MaterialButton handleClick={resetGame} text="Start New Game" />
					</Container>
				</Container>
			</Paper>
		</React.Fragment>
	);
}
