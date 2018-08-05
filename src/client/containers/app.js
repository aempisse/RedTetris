import React from 'react';
import UpdateTetri from '../components/UpdateTetri.js';
import GameBoard from '../components/GameBoard.js';
import MoveLeft from '../components/MoveLeft.js';
import MoveRight from '../components/MoveRight.js';
import MoveRot from '../components/MoveRot.js';


const App = () => (
	<div>
		<UpdateTetri />
		<MoveLeft />
		<MoveRight />
		<MoveRot />
		<GameBoard />
	</div>
);

export default App;