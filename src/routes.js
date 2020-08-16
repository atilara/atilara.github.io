import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import About from './pages/About/index';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
