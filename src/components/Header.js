import React from 'react';
import styled from 'styled-components';
import TemporaryDrawer from '../components/Drawer';

import { AppBar, Toolbar, Container } from '@material-ui/core/';

const StyledContainer = styled(Container)`
	text-align: center;
`;

export default function Header() {
	return (
		<React.Fragment>
			<AppBar position="static" elevation={0} color="transparent">
				<Toolbar disableGutters={true}>
					<StyledContainer>
						<h1>Game of Skate</h1>
					</StyledContainer>
					<div>
						<TemporaryDrawer />
					</div>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
