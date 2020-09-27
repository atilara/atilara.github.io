import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	height: 60px;
	background: ${(props) => props.theme.colors.primary};
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 6rem;
	position: relative;
	> svg {
		display: none;
	}

	@media (max-width: 700px) {
		padding: 0 20px;

		> svg {
			display: block;
		}
	}
`;

export const Nav = styled(Link)`
	color: ${(props) => props.theme.colors.headerText};
`;

export const Items = styled.div`
	display: flex;
	align-items: center;
	svg {
		cursor: pointer;
		margin-left: 8px;
	}

	a {
		margin: 0 10px;
	}

	@media (max-width: 700px) {
		display: ${(props) => (props.open ? 'flex' : 'none')};
		flex-direction: column;
		position: absolute;
		left: 0;
		top: 59px;
		height: 20vh;
		width: 100vw;
		background: ${(props) => props.theme.colors.primary};
		justify-content: space-evenly;
		a {
			margin: 0;
		}

		svg {
			margin: 0;
		}
	}
`;
