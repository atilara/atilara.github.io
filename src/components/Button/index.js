import styled from 'styled-components';

export default styled.button`
	background: ${(props) => props.theme.colors.secondary};
	color: white;
	border: ${(props) => props.theme.colors.secondary};

	width: 8rem;
	padding: 12px;
	border-radius: 16px;

	font-weight: bold;
	font-size: 15px;

	cursor: pointer;
	outline: 0;

	&:hover {
		background: ${(props) => props.theme.colors.primary};
	}
`;
