import React from 'react';

import styled from 'styled-components';

const CardDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	border: 1px solid black;
	margin:20px;
	padding: 30px;
	height: 150px;
	width: 50%;
`;

const Card = props => {
	const { id } = props.data;
	return (
		<CardDiv>
			<h2>{id}</h2>
		</CardDiv>
	);
};

export default Card;
