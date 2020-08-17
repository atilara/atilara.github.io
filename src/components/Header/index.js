import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container, Nav, Items } from './styles';

function Header({ toggleTheme }) {
	const { colors, title } = useContext(ThemeContext);
	return (
		<Container>
			<Nav to="/">Átila Rodrigues</Nav>
			<Items>
				<Nav to="/projects">Projetos</Nav>
				<Nav to="/contact">Contato</Nav>

				<Switch
					onChange={toggleTheme}
					checked={title === 'dark'}
					checkedIcon={false}
					uncheckedIcon={false}
					height={10}
					width={40}
					handleDiameter={20}
					onColor={colors.secondary}
				/>
			</Items>
		</Container>
	);
}

export default Header;
