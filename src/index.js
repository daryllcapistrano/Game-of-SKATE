import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Greeting from './components/Greeting';
import ScorekeeperDisplay from './components/ScorekeeperDisplay';
import MaterialButton from './components/MaterialButton';

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
		<div style={{ textAlign: `center` }}>
			<Greeting total={total} />
			<ScorekeeperDisplay total={total} />
			<MaterialButton handleClick={landedCounter} disabled={isEnabled} text="Landed" />
			<MaterialButton handleClick={missedCounter} disabled={isEnabled} text="Missed" />
			<MaterialButton handleClick={removeLetter} disabled={isEnabled} text="Remove A Letter" />
			<MaterialButton handleClick={resetGame} text="Start New Game" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
