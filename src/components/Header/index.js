import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Container, Nav, Items } from './styles';

function Header({ toggleTheme, theme }) {
	const [open, setOpen] = useState(false);

	function handleOpen() {
		setOpen(!open);
	}

	return (
		<Container>
			<Nav to="/" onClick={open ? handleOpen : ''}>
				Átila Rodrigues
			</Nav>
			<GiHamburgerMenu size={25} onClick={handleOpen} />
			<Items open={open}>
				<Nav to="/projects" onClick={handleOpen}>
					Projetos
				</Nav>
				<Nav to="/contact" onClick={handleOpen}>
					Contato
				</Nav>
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
