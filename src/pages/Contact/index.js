import React, { useCallback } from 'react';
import {
	AiOutlineMail,
	AiOutlineGithub,
	AiOutlineLinkedin,
} from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import profilePic from '../../assets/me.JPG';

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
	const onHandleSubmit = useCallback((event) => {
		event.preventDefault();

		const inputs = document.getElementsByTagName('input');
		const description = document.getElementsByTagName('textarea')[0].value;

		const formData = {
			name: inputs[0].value,
			email: inputs[1].value,
			subject: inputs[2].value,
			description,
		};

		if (
			formData.name === '' ||
			formData.email === '' ||
			formData.subject === '' ||
			formData.description === ''
		) {
			toast('📝 Favor preencher todos os campos', {
				position: 'top-center',
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				bodyStyle: {
					fontFamily: 'Archivo',
					fontSize: 16,
					color: '#272727',
				},
			});
			return;
		}

		toast.info('📤 Enviando e-mail...', {
			position: 'top-center',
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			bodyStyle: { fontFamily: 'Archivo', fontSize: 20 },
		});

		fetch('https://formspree.io/mrgyvvqr', {
			method: 'POST',
			headers: { Accept: 'application/json' },
			body: JSON.stringify(formData),
		})
			.then((response) => {
				if (response.status === 200) {
					toast.success('🚀 E-mail enviado com sucesso!', {
						position: 'top-center',
						autoClose: 4000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						bodyStyle: { fontFamily: 'Archivo', fontSize: 20 },
					});
				} else {
					toast.error('😓 Erro ao enviar o e-mail', {
						position: 'top-center',
						autoClose: 4000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						bodyStyle: { fontFamily: 'Archivo', fontSize: 20 },
					});
				}

				for (let i = 0; i < 3; i += 1) {
					inputs[i].value = '';
				}

				document.getElementsByTagName('textarea')[0].value = '';
			})
			.catch(() => {
				toast.error('😓 Erro ao enviar o e-mail', {
					position: 'top-center',
					autoClose: 4000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					bodyStyle: { fontFamily: 'Archivo', fontSize: 20 },
				});
			});
	}, []);

	return (
		<Container>
			<Info>
				<img src={profilePic} alt="Foto de perfil" />
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
			<Form onSubmit={onHandleSubmit}>
				<h2>Entre em contato comigo!</h2>
				<Input type="text" name="name" placeholder="Nome" />
				<Input type="email" name="email" placeholder="E-mail" />
				<Input type="text" name="subject" placeholder="Assunto" />
				<Textarea type="text" name="name" placeholder="Descrição" />
				<ButtonC type="submit">Enviar</ButtonC>
			</Form>
			<ToastContainer />
		</Container>
	);
}

export default Contact;
