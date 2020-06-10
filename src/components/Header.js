import React from 'react';
import TopDrawer from '../components/TopDrawer';

import { AppBar, Toolbar, Container } from '@material-ui/core/';

export default function Header() {
	return (
		<React.Fragment>
			<AppBar position="static" elevation={0} color="transparent">
				<Toolbar disableGutters={true}>
					<Container>
						<h1>Game of Skate</h1>
					</Container>
					<TopDrawer />
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
