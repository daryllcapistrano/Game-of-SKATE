import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const StyledContainer = styled(Container)`
	text-align: center;
`;

export default function Header() {
	return (
		<React.Fragment>
			<AppBar position="static" elevation={0} color="transparent">
				<Toolbar>
					<StyledContainer>
						<h1>Game of Skate</h1>
					</StyledContainer>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
