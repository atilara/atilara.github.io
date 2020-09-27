import React from 'react';

import {
	Container,
	Icon,
	Content,
	Title,
	Description,
	ButtonS,
} from './styles';

import projectExample from '../../assets/project-example.png';

function Project() {
	return (
		<Container>
			<Icon>
				<img src={projectExample} alt="me" />
			</Icon>
			<Content>
				<Title>Exemplo de Projeto</Title>
				<Description>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Quam ipsa accusamus veniam.
				</Description>
				<Description>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Quos, pariatur quaerat!
				</Description>
				<ButtonS>ver mais</ButtonS>
			</Content>
		</Container>
	);
}

export default Project;
