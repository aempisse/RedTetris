import {MOVE_RIGHT} from '../constants/action_types.js';
import store from "../store/index.js"

export function moveRight() {
	var col_tetri = store.getState().Tetriminos[1] + 1;
	var lgn_tetri = store.getState().Tetriminos[0];
	var coord_tetri = [lgn_tetri, col_tetri];

	console.log("coord du tetriminos avant changement : " + (lgn_tetri) + ',' + (col_tetri - 1));
	coord_tetri = [lgn_tetri, col_tetri];
	console.log("coord du tetriminos apres changement : " + (lgn_tetri) + ',' + (col_tetri));

	var newGameState = store.getState().CaseState;

	if (col_tetri > 9 || newGameState[lgn_tetri][col_tetri] == 2)
	{
		return {
			type: MOVE_RIGHT,
			gamePayload: newGameState,
			tetriPayload: [lgn_tetri, col_tetri - 1],
		}
	}

//

	newGameState[lgn_tetri][col_tetri - 1] = 0;

	if (col_tetri > 9 || newGameState[lgn_tetri][col_tetri] != 2)
		newGameState[lgn_tetri][col_tetri] = 1;

//

	return {
		type: MOVE_RIGHT,
		gamePayload: newGameState,
		tetriPayload: coord_tetri,
	}
};