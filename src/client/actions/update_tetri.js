import {UPDATE_TETRI} from '../constants/action_types.js';
import store from "../store/index.js";
import * as bitmap from "../constants/bitmap.js"
import _ from "lodash";

export function updateTetri() {
	var col_tetri = store.getState().Tetriminos[1];
	var lgn_tetri = store.getState().Tetriminos[0] + 1;
	var coord_tetri = [lgn_tetri, col_tetri];;

	console.log("coord du tetriminos avant changement : " + (lgn_tetri - 1) + ',' + col_tetri);
	coord_tetri = [lgn_tetri, col_tetri];
	console.log("coord du tetriminos apres changement : " + coord_tetri);

	console.log("debut test fill array /////////////////////");
	console.log("///////////////////////////////////////////");

	// var array = [[0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],];
	// var array2 = [[1, 1, 1, 1],
	// 			[2, 2, 2, 2],
	// 			[0, 3, 0, 0],
	// 			[0, 0, 4, 0],];

	// console.log(array);

	// var i = 0;
	// var j = 0;
	// while (i < 4)
	// {
	// 	while (j < 4)
	// 	{
	// 		_.fill(array[i], array2[i][j], j, j + 1)
	// 		j++;
	// 	}
	// 	i++;
	// 	j = 0;
	// }
	// console.log(array);


	var newGameState = store.getState().CaseState;
	// var tmp = bitmap.Map("I", 0);
	// console.log("tmp = " + tmp);
	newGameState = bitmap.fillMap(lgn_tetri - 1, col_tetri, newGameState, bitmap.Map("I", 0), 0);
	newGameState = bitmap.fillMap(lgn_tetri, col_tetri, newGameState, bitmap.Map("I", 0), 1);
	// newGameState = bitmap.clearLastPos(lgn_tetri - 1, col_tetri, newGameState, tmp)

	console.log(newGameState);

	console.log("///////////////////////////////////////////");
	console.log("fin test fill array ///////////////////////");
	if (lgn_tetri - 1 >= 0)
		newGameState[lgn_tetri - 1][col_tetri] = 0;

	if (lgn_tetri + 1 >= 20 || newGameState[lgn_tetri + 1][col_tetri] === 2)
	{
		coord_tetri = [0, 5];
		newGameState[0][5] = 1;
		newGameState[lgn_tetri][col_tetri] = 2;
	}
	else
		newGameState[lgn_tetri][col_tetri] = 1;


	return {
		type: UPDATE_TETRI,
		gamePayload: newGameState,
		tetriPayload: coord_tetri,
	}
};
