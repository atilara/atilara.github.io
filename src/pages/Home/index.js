import React from 'react';
import { Link } from 'react-router-dom';

import { Title } from './styles';

function Home() {
	return (
		<>
			<Title>Home</Title>
			<Link to="/about">
				<button>Página de Sobre</button>
			</Link>
		</>
	);
}

export default Home;
