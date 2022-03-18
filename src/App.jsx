import React, { useState } from 'react';

const App = () => {
	const [username, setUsername] = useState('');
	const [msg, setMsg] = useState('');
	const [timeline, setTimeline] = useState([
		{
			name: 'Gage Jones',
			message: 'I made a TicTacToe game using JavaScript!',
		},
		{
			name: 'Branwin DuBose',
			message: 'Me and my Doozer friends made an app called LogBook!'
		},
		{
			name: 'Cody Jett',
			message: 'Noone cares...'
		}
	]);

	const handleUsername = e => {
		setUsername(e.target.value);
	};

	const handleMsg = e => {
		setMsg(e.target.value);
	};

	const handleTimeline = () => {};

	return (
		<div>
			<form>
				<input
					value={username}
					onChange={handleUsername}
					placeholder={'Username'}
				/>
				<textarea
					value={msg}
					onChange={handleMsg}
					placeholder={'Message'}
				/>

				<button onClick={handleTimeline}>Chirp</button>
				<h1>{timeline.name}</h1>
			</form>
		</div>
	);
};

export default App;
