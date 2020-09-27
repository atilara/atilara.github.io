import styled from 'styled-components';

import Button from '../Button';

export const Container = styled.div`
	margin: 0 0 1rem 6rem;
	display: flex;
	flex-direction: row;
`;

export const Icon = styled.div`
	img {
		width: 10rem;
		border-radius: 8px;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Title = styled.h3`
	margin: 0 0 0.4rem 1rem;
`;

export const Description = styled.p`
	margin: 0 0 0.4rem 1rem;
`;

export const ButtonS = styled(Button)`
	margin-left: 1rem;
	padding: 8px;
`;
