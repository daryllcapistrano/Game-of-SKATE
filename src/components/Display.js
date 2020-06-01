import React from 'react';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';

const StyledPaper = styled(Paper)`
	margin: auto;
	padding: 7px 14px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	width: fit-content
`;

export default function Display(props) {
	if (props.playerOne === 0 && props.playerTwo === 0) {
		return (
			<StyledPaper>
				<strong>Status:</strong> No Score Yet
			</StyledPaper>
		);
	}
	if (props.playerOne < 5 && props.playerTwo === 5) {
		return (
			<StyledPaper>
				<strong>Status:</strong> Player One Wins
			</StyledPaper>
		);
	}
	if (props.playerOne === 5 && props.playerTwo < 5) {
		return (
			<StyledPaper>
				<strong>Status:</strong> Player Two Wins
			</StyledPaper>
		);
	} else {
		return (
			<StyledPaper>
				<strong>Status:</strong> Session Is Progress
			</StyledPaper>
		);
	}
}
