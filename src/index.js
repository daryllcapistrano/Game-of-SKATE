import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import PlayerCards from './components/PlayerCards';

const App = () => {
	return (
		<React.Fragment>
			<Header />
			<PlayerCards />
		</React.Fragment>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
