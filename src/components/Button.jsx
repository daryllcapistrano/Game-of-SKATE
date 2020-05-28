import React from 'react';

export default function Button(props) {
	return (
		<button onClick={props.handleClick} disabled={props.disabled}>
			{props.text}
		</button>
	);
}
