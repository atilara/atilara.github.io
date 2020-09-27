import styled from 'styled-components';

import Button from '../Button';

export const Container = styled.div`
	margin: 0 0 1rem 6rem;
	display: flex;
	flex-direction: row;
	@media (max-width: 700px) {
		flex-direction: column;
		margin: 1rem;
	}
`;

export const Icon = styled.div`
	img {
		width: 10rem;
		border-radius: 8px;
		@media (max-width: 700px) {
			width: 12rem;
			margin-bottom: 0.8rem;
		}
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Title = styled.h3`
	margin: 0 0 0.4rem 1rem;
	@media (max-width: 700px) {
		margin: 0 0 0.4rem 0;
	}
`;

export const Description = styled.p`
	margin: 0 0 0.4rem 1rem;
	@media (max-width: 700px) {
		margin: 0 0 0.4rem 0;
	}
`;

export const ButtonS = styled(Button)`
	margin-left: 1rem;
	padding: 8px;
	@media (max-width: 700px) {
		margin: 0 0 2rem 0;
	}
`;
