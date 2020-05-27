import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = (props) => {
	if (props.score === 5) {
		return <div>game over</div>;
	} else {
		return <div>{props.score}</div>;
	}
};

const Button = (props) => {
	return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
	const [ score, setCounter ] = useState(0);

	const incrementCounter = () => {
		setCounter(score + 1);
		if (score === 5) {
			setCounter(0);
		}
	};

	return (
		<div>
			<Display score={score} />
			<Button handleClick={incrementCounter} text="S" />
			<Button handleClick={incrementCounter} text="K" />
			<Button handleClick={incrementCounter} text="A" />
			<Button handleClick={incrementCounter} text="T" />
			<Button handleClick={incrementCounter} text="E" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
