import React from 'react';

export default function ScoreBoard(props) {
	if (props.playerOne === 0 || props.playerTwo === 0) {
		return (
			<div>
				<h2>NO LETTERS</h2>
			</div>
		);
	}
	if (props.playerOne === 1 || props.playerTwo === 1) {
		return (
			<div>
				<h2>S</h2>
			</div>
		);
	}
	if (props.playerOne === 2 || props.playerTwo === 2) {
		return (
			<div>
				<h2>S K</h2>
			</div>
		);
	}
	if (props.playerOne === 3 || props.playerTwo === 3) {
		return (
			<div>
				<h2>S K A</h2>
			</div>
		);
	}
	if (props.playerOne === 4 || props.playerTwo === 4) {
		return (
			<div>
				<h2>S K A T</h2>
			</div>
		);
	}
	if (props.playerOne === 5 || props.playerTwo === 5) {
		return (
			<div>
				<h2>S K A T E</h2>
			</div>
		);
	}
}
