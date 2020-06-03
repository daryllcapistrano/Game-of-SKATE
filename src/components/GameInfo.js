import React from 'react';
import { Container } from '@material-ui/core/';

export default function GameInfo() {
	return (
		<React.Fragment>
			<Container>
				The game of S.K.A.T.E. is based on the old basketball game H.O.R.S.E. and was first played in the 70’s by vert
				skateboarding legends Neil Blender, and John Lucero. Later it was adopted to street skating and made famous by
				the worldwide eS Game of SKATE tournament and The Berrics’ game of skate called Battle at the Berrics.
			</Container>
			<br />
			<br />
			<Container>
				<strong>Here's how to play:</strong> One player sets a trick by doing a particular skateboarding trick of their
				choice. If the trick is not landed, another player attempts to set a trick. Once a trick has been set (landed),
				the other player(s) must respond by doing the same trick in their first try. If they make it the game continues;
				If every one gets the trick the player who set it gets a point if they miss it, they get a letter, starting with
				S, and so on, until they have missed five tricks, spelling SKATE, and they are out or the game is over. No trick
				may be set more than once in the same game and a skater defending on their last letter may receive two attempts
				at that trick. If the player lands the trick they have gained the lead and set the trick.
			</Container>
			<br />
			<br />
		</React.Fragment>
	);
}
