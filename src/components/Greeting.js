import React from 'react';

export default function Greeting(props) {
	if (props.playerOne === 0 && props.playerTwo === 0) {
		return null;
	}
	if (props.playerOne < 5 && props.playerTwo === 5) {
		return <h1>Player One Wins</h1>;
	}
	if (props.playerOne === 5 && props.playerTwo < 5) {
		return <h1>Player Two Wins</h1>;
	} else {
		return null;
	}
}
