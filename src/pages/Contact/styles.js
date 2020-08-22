import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
	margin-top: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0 10rem 1rem 10rem;
	img {
		border-radius: 50%;
		max-width: 16rem;
		margin-right: 2rem;
	}
	@media (max-width: 800px) {
		flex-wrap: wrap;
		justify-content: center;
		img {
			margin: 0 0 1rem 0;
			max-width: 12rem;
		}
	}
`;

export const Social = styled.div`
	display: flex;
	flex-direction: column;
	> div {
		display: flex;
		flex-direction: row;
		margin-bottom: 0.6rem;
		align-items: center;
		svg {
			margin-right: 0.4rem;
		}
	}
`;

export const Link = styled.a`
	display: flex;
	flex-direction: row;
	margin-bottom: 0.6rem;
	align-items: center;
	svg {
		margin-right: 0.4rem;
	}
`;

export const Form = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	h2 {
		margin-bottom: 1rem;
	}
`;

export const Input = styled.input`
	width: 60%;
	margin-bottom: 1rem;
	padding: 8px 10px;
	border: 2px solid ${(props) => props.theme.colors.secondary};
	background-color: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.text};
	border-radius: 8px;
	transition: border 0.3s ease;

	&::placeholder {
		color: ${(props) => props.theme.colors.text};
	}

	&:focus {
		outline: 0;
		border: 2px solid ${(props) => props.theme.colors.primary};
	}
	@media (max-width: 800px) {
		width: 85%;
	}
`;

export const Textarea = styled.textarea`
	width: 60%;
	height: 8rem;
	margin-bottom: 1rem;
	resize: none;
	padding: 8px 10px;
	border: 2px solid ${(props) => props.theme.colors.secondary};
	background-color: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.text};
	border-radius: 8px;
	transition: border 0.3s ease;
	&::placeholder {
		color: ${(props) => props.theme.colors.text};
	}

	&:focus {
		outline: 0;
		border: 2px solid ${(props) => props.theme.colors.primary};
	}
	@media (max-width: 800px) {
		width: 85%;
	}
`;

export const ButtonC = styled(Button)`
	margin-bottom: 2rem;
`;
