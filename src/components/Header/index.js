import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';

import { Container, Nav, Items } from './styles';

function Header({ toggleTheme, theme }) {
	// const { colors, title } = useContext(ThemeContext);
	return (
		<Container>
			<Nav to="/">Átila Rodrigues</Nav>
			<Items>
				{/* <Switch
					onChange={toggleTheme}
					checked={title === 'dark'}
					checkedIcon={false}
					uncheckedIcon={false}
					height={10}
					width={40}
					handleDiameter={20}
					onColor={colors.secondary}
				/> */}
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
