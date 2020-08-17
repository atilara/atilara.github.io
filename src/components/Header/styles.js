import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	height: 60px;
	background: ${(props) => props.theme.colors.primary};
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
`;

export const Nav = styled(Link)`
	color: ${(props) => props.theme.colors.headerText};
`;

export const Items = styled.div`
	display: flex;
	align-items: center;

	a {
		margin: 0 10px;
	}
`;
