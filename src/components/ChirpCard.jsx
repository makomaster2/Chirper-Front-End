import React from 'react';

const ChirpCard = ({ username, message, color }) => {
	return (
		<>
			<h3 style={{color:color}}>{username}</h3>
			<p>{message}</p>
		</>
	);
};

export default ChirpCard;
