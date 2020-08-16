import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

function Header({ toggleTheme }) {
	const { colors, title } = useContext(ThemeContext);
	return (
		<Container>
			Hello World
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
		</Container>
	);
}

export default Header;
