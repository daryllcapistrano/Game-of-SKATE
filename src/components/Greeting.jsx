import React from 'react';

export default function Greeting(props) {
	if (props.total === 0) {
		return <div>Start Game</div>;
	} else {
		return <div> </div>;
	}
}
