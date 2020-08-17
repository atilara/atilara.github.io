import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import Projects from './pages/Projects/index';
import Contact from './pages/Contact/index';

function Routes(props) {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/projects" component={Projects} />
			<Route path="/contact" component={Contact} />
		</Switch>
	);
}

export default Routes;
