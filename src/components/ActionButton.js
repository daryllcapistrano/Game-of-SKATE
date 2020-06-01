import React from 'react';
import Button from '@material-ui/core/Button';

export default function ActionButton(props) {
	return (
		<Button onClick={props.handleClick} disabled={props.disabled}>
			{props.text}
		</Button>
	);
}
