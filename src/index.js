import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Greeting from './components/Greeting';
import ScorekeeperDisplay from './components/ScorekeeperDisplay';
import Button from './components/Button';

const App = () => {
	const [ total, setTotal ] = useState(0);
	const isEnabled = total === 5;

	const resetGame = () => {
		setTotal(0);
	};

	const removeLetter = () => {
		if (total === 0) {
			return null;
		} else {
			setTotal(total - 1);
		}
	};

	const landedCounter = () => {
		return null;
		// do nothing or pass to next player
	};

	const missedCounter = () => {
		setTotal(total + 1);
	};

	return (
		<div>
			<Greeting total={total} />
			<ScorekeeperDisplay total={total} />
			<Button handleClick={landedCounter} disabled={isEnabled} text="Landed" />
			<Button handleClick={missedCounter} disabled={isEnabled} text="Missed" />
			<Button handleClick={removeLetter} disabled={isEnabled} text="Remove A Letter" />
			<Button handleClick={resetGame} text="Start New Game" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
