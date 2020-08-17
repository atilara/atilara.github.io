import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		transition: color 0.3s ease;
		transition: background-color 0.3s ease;
	}

	body {
		background: ${(props) => props.theme.colors.background};
		font-size: 14px;
		color: ${(props) => props.theme.colors.text};
	}

	body, button, input, textarea {
		font: 500 1rem Poppins;
	}

	a {
		text-decoration: none;
		color: ${(props) => props.theme.colors.text}
	}
`;
