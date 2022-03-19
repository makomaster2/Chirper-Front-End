import React, { useState } from 'react';
import ChirpCard from './components/ChirpCard';
import { v4 as uuidv4 } from 'uuid';
// import ColorPicker from './components/ColorPicker';

const App = () => {
	const [color, setColor] = useState('');
	const [username, setUsername] = useState('');
	const [message, setMessage] = useState('');
	const [chirps, setChirps] = useState([
		{
			id: uuidv4(),
			username: 'Gage Jones',
			message: 'I made a TicTacToe game using JavaScript!',
			color: '#ff0000',
		},
		{
			id: uuidv4(),
			username: 'Branwin DuBose',
			message: 'Me and my Doozer friends made an app called LogBook!',
			color: '#ffff00',
		},
		{
			id: uuidv4(),
			username: 'Cody Jett',
			message: 'Noone cares...',
			color: '#0000ff',
		},
	]);

	const handleUsernameChange = e => setUsername(e.target.value);

	const handleMessageChange = e => setMessage(e.target.value);

	const handleChirpSubmit = e => {
		e.preventDefault();

		let newChirp = {
			id: uuidv4(),
			username: username,
			message: message,
			color: color,
		};

		setChirps([...chirps, newChirp]);
	};

	const handleColorChange = e => {
		console.log(e.target.value)
		setColor(e.target.value);
	};

	return (
		<>
			<form id={'chirpForm'} className='container'>
				<input
					value={username}
					onChange={handleUsernameChange}
					placeholder={'Username'}
				/>
				<textarea
					value={message}
					onChange={handleMessageChange}
					placeholder={'Message'}
					cols={'30'}
					rows={'10'}
				/>
				<button className={'btn-warning'} onClick={handleChirpSubmit}>
					Chirp
				</button>
				<div>
					<input
						type='color'
						id='colorChoice'
						name='colorChoice'
						onChange={handleColorChange}
						value={color}
					/>
					<label for='colorChoice'>Choose a color!</label>
				</div>
			</form>
			<div id={'chirpCard'} className='container bg-info'>
				{chirps.map(chirp => (
					<ChirpCard
						key={chirp.id}
						username={chirp.username}
						message={chirp.message}
						color={chirp.color}
					/>
				))}
			</div>
		</>
	);
};

export default App;
