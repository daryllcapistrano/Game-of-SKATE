import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ScorekeeperDisplay = (props) => {
	if (props.total === 0) {
		return <div>begin new game</div>;
	}
	if (props.total === 1) {
		return (
			<div>
				<p>S</p>
			</div>
		);
	}
	if (props.total === 2) {
		return (
			<div>
				<p>SK</p>
			</div>
		);
	}
	if (props.total === 3) {
		return (
			<div>
				<p>SKA</p>
			</div>
		);
	}
	if (props.total === 4) {
		return (
			<div>
				<p>SKAT</p>
			</div>
		);
	}
	if (props.total === 5) {
		return (
			<div>
				<p>SKATE</p>
				<h3>game over</h3>
			</div>
		);
	}
};

const Button = (props) => {
	return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
	const [ total, setTotal ] = useState(0);

	const resetGame = () => {
		setTotal(0);
	};

	const landedCounter = () => {
		console.log(total);
		// do nothing or pass to next player
	};

	const missedCounter = () => {
		setTotal(total + 1);
	};

	return (
		<div>
			<ScorekeeperDisplay total={total} />
			<Button handleClick={landedCounter} text="Landed It" />
			<Button handleClick={missedCounter} text="Missed It" />
			<Button handleClick={resetGame} text="Start New Game" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
