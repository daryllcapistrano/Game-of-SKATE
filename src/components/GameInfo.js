import React from 'react';
import Container from '@material-ui/core/Container';

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
				<strong>Rules:</strong> The Game of SKATE is based on the basketball Game of HORSE. Here's how to play: The
				first skater tries a trick, makes it, and everyone else has to make it. Whoever doesn't make it gets a letter.
				The first letter is "S", the second letter is "K", and so on, until "S-K-A-T-E" is spelled out, and that person
				is out of the game. When it's the first skater's turn again, he tries another trick. If he makes it, the whole
				process repeats. If the first person misses the trick he tries, the second player tries his own trick. If he
				makes it, everyone else has to make that trick, in order. If anyone misses, they get a letter, and so on.
			</Container>
			<br />
			<br />
		</React.Fragment>
	);
}
