import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

import { Container, Profile, Image, Social, Link } from './styles';

function Home() {
	return (
		<Container>
			<Profile>
				<Image src="https://www.github.com/atilara.png" alt="Me" />
				<div>
					<h1>Olá!</h1>
					<p>Me chamo Átila Rodrigues! Este é o meu portfólio.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Enim voluptas dolor voluptatum illum! Dolor totam et
						hic. Iusto explicabo tempora facilis accusamus
						laudantium, dignissimos accusantium fugit eligendi
						velit, magnam est.
					</p>
				</div>
			</Profile>
			<Social>
				<Link href="https://www.github.com/atilara" target="_blank">
					<AiOutlineGithub size={40} />
					<h3>GitHub</h3>
				</Link>
				<Link
					href="https://www.linkedin.com/in/atilara"
					target="_blank"
				>
					<AiOutlineLinkedin size={40} />
					<h3>LinkedIn</h3>
				</Link>
			</Social>
		</Container>
	);
}

export default Home;
