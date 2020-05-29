import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function Header() {
	return (
		<React.Fragment>
			<AppBar>
				<Toolbar>
					<h1>Skateboarding Game Tracker</h1>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
