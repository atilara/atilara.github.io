import React from 'react';
import {
	AiOutlineMail,
	AiOutlineGithub,
	AiOutlineLinkedin,
} from 'react-icons/ai';

import {
	Container,
	Info,
	Social,
	Link,
	Form,
	Input,
	Textarea,
	ButtonC,
} from './styles';

function Contact() {
	return (
		<Container>
			<Info>
				<img
					src="https://www.github.com/atilara.png"
					alt="Foto de perfil"
				/>
				<Social>
					<div>
						<AiOutlineMail size={40} />
						<h3>atila.rodriguesal@gmail.com</h3>
					</div>
					<Link href="https://www.github.com/atilara" target="_blank">
						<AiOutlineGithub size={40} />
						<h3>atilara</h3>
					</Link>
					<Link
						href="https://www.linkedin.com/in/atilara"
						target="_blank"
					>
						<AiOutlineLinkedin size={40} />
						<h3>Átila Rodrigues</h3>
					</Link>
				</Social>
			</Info>
			<Form>
				<h2>Entre em contato comigo!</h2>
				<Input type="text" name="name" placeholder="Nome" />
				<Input type="email" name="email" placeholder="E-mail" />
				<Input type="text" name="subject" placeholder="Assunto" />
				<Textarea type="text" name="name" placeholder="Descrição" />
				<ButtonC>Enviar</ButtonC>
			</Form>
		</Container>
	);
}

export default Contact;
