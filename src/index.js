import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import ScoreCards from './components/ScoreCards';

const App = () => {
	return (
		<React.Fragment>
			<Header />
			<ScoreCards />
		</React.Fragment>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
