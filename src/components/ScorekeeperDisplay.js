import React from 'react';

export default function ScorekeeperDisplay(props) {
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
}
