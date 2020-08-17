import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import About from './pages/About/index';

function Routes(props) {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/about" component={About} />
		</Switch>
	);
}

export default Routes;
