import {CHANGE_COLOR, UPDATE_TETRI, TETRI_MOVE} from "../constants/action_types";
import {newTetriminos} from "../constants/TetriminosGenerator.js";

const initialState = {
	CaseState: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				[0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 2, 2, 2, 2, 2, 2, 2, 2, 2],],
	Tetriminos: newTetriminos(),
	CollisionBool: 0,
};

const rootReducer = (state = initialState, action) => {
//	 console.log("payload dans le reducer : " + action.gamePayload);
	switch (action.type) {
		case CHANGE_COLOR:
			return {...state, colors: action.payload};
		case UPDATE_TETRI:
			return {...state, Tetriminos: action.tetriPayload, CaseState: action.gamePayload, CollisionBool: action.CollisionUpdate};
		case TETRI_MOVE:
			return {...state, Tetriminos: action.tetriPayload, CaseState: action.gamePayload};
		default:
			return state;
	}
};

export default rootReducer;