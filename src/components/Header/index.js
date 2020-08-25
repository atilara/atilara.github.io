import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

import { Container, Nav, Items } from './styles';

function Header({ toggleTheme, theme }) {
	return (
		<Container>
			<Nav to="/">Átila Rodrigues</Nav>
			<Items>
				<Nav to="/projects">Projetos</Nav>
				<Nav to="/contact">Contato</Nav>
				{theme.title === 'light' ? (
					<FiSun size={25} onClick={toggleTheme} />
				) : (
					<FiMoon size={25} onClick={toggleTheme} />
				)}
			</Items>
		</Container>
	);
}

export default Header;
