import {CHANGE_COLOR, UPDATE_TETRI, TETRI_MOVE} from "../constants/action_types";

const initialState = {
	colors: 'red',
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
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 2, 2, 2, 2, 2, 2, 2, 2, 2],],
	Tetriminos: [[0, 0], "I", 0],
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