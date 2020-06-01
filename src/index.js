import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import GameInfo from './components/GameInfo';
import PlayerCards from './components/PlayerCards';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
	font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

const App = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Header />
			<GameInfo />
			<PlayerCards />
		</React.Fragment>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
