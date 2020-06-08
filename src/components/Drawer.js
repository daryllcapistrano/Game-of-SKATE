import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
	fullList: {
		width: 'auto'
	}
});

export default function TemporaryDrawer() {
	const classes = useStyles();
	const [ state, setState ] = React.useState({
		top: false
		// left: false,
		// bottom: false,
		// right: false
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = () => (
		<div className={classes.fullList} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
			<List>
				<ListItemText>
					<div style={{ textAlign: `center` }}>
						<strong>Here's how to play:</strong>{' '}
					</div>
				</ListItemText>
			</List>
			<Divider />
			<List>
				<ListItem>
					<ListItemText>
						One player sets a trick by doing a particular skateboarding trick of their choice. If the trick is not
						landed, another player attempts to set a trick. Once a trick has been set (landed), the other player(s) must
						respond by doing the same trick in their first try. If they make it the game continues; If every one gets
						the trick the player who set it gets a point if they miss it, they get a letter, starting with S, and so on,
						until they have missed five tricks, spelling SKATE, and they are out or the game is over. No trick may be
						set more than once in the same game and a skater defending on their last letter may receive two attempts at
						that trick. If the player lands the trick they have gained the lead and set the trick.
					</ListItemText>
				</ListItem>
			</List>
		</div>
	);

	return (
		<div>
			{[ 'top' ].map((anchor) => (
				<React.Fragment>
					<Button onClick={toggleDrawer(anchor, true)}>Game Rules</Button>
					<Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}
