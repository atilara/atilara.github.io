import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import usePersistedState from './utils/usePersistedState';

import Header from './components/Header';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
	const [theme, setTheme] = usePersistedState('theme', light);

	const toggleTheme = () => {
		// se o tema utilizado por light, troca para o dark, se for light mantém
		setTheme(theme.title === 'light' ? dark : light);
	};

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header toggleTheme={toggleTheme} />
				<Routes />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
