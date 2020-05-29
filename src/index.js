import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import Greeting from './components/Greeting';
import Header from './components/Header';
import ScorekeeperDisplay from './components/ScorekeeperDisplay';
import MaterialButton from './components/MaterialButton';

const App = () => {
	const [ playerOne, setPlayerOne ] = useState(0);
	const [ playerTwo, setPlayerTwo ] = useState(0);

	const isEnabled = playerOne === 5 || playerTwo === 5;

	// left player

	const resetGame = () => {
		setPlayerOne(0);
	};

	const removeLetter = () => {
		if (playerOne === 0) {
			return null;
		} else {
			setPlayerOne(playerOne - 1);
		}
	};

	const landedCounter = () => {
		return null;
	};

	const missedCounter = () => {
		setPlayerOne(playerOne + 1);
	};

	// right player

	const resetGameRight = () => {
		setPlayerTwo(0);
	};

	const removeLetterRight = () => {
		if (playerTwo === 0) {
			return null;
		} else {
			setPlayerTwo(playerTwo - 1);
		}
	};

	const landedCounterRight = () => {
		return null;
	};

	const missedCounterRight = () => {
		setPlayerTwo(playerTwo + 1);
	};

	return (
		<React.Fragment>
			<Header />
			<Paper elevation={2} style={{ marginTop: `100px` }}>
				<Container style={{ textAlign: `center`, padding: `15px` }}>
					<Container style={{ padding: `15px` }}>
						<Greeting playerOne={playerOne} playerTwo={playerTwo} />
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
			<Paper elevation={2} style={{ marginTop: `100px` }}>
				<Container style={{ textAlign: `center`, padding: `15px` }}>
					<Container style={{ padding: `15px` }}>
						<Greeting playerOne={playerOne} playerTwo={playerTwo} />
						<ScorekeeperDisplay playerTwo={playerTwo} />
					</Container>
					<Container>
						<MaterialButton handleClick={landedCounterRight} disabled={isEnabled} text="Landed" />
						<MaterialButton handleClick={missedCounterRight} disabled={isEnabled} text="Missed" />
						<MaterialButton handleClick={removeLetterRight} disabled={isEnabled} text="Remove A Letter" />
						<MaterialButton handleClick={resetGameRight} text="Start New Game" />
					</Container>
				</Container>
			</Paper>
		</React.Fragment>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
