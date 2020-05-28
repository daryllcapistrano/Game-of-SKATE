import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Greeting = (props) => {
	if (props.total === 0) {
		return <div>Start Game</div>;
	} else {
		return <div> </div>;
	}
};

const ScorekeeperDisplay = (props) => {
	if (props.total === 0) {
		return <div>no score</div>;
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
	return (
		<button onClick={props.handleClick} disabled={props.disabled}>
			{props.text}
		</button>
	);
};

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
