import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 60rem;
	p {
		text-align: justify;
		margin: 1rem 1rem;
	}
	@media (max-width: 800px) {
		flex-wrap: wrap;
		h1 {
			margin: 0 2rem;
		}
		p {
			margin: 1rem 2rem;
		}
	}
`;

export const Image = styled.img`
	margin: 2rem;
	border-radius: 50%;
	border: 8px solid ${(props) => props.theme.colors.primary};
	width: 20rem;
	@media (max-width: 800px) {
		width: 15rem;
		margin: 1rem 0;
	}
`;

export const Social = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 2rem;

	@media (max-width: 800px) {
		flex-wrap: wrap;
	}
`;

export const Link = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0 10px;

	h3 {
		margin: 0 5px;
	}
`;
