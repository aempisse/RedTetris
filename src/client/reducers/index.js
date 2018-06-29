import {CHANGE_COLOR, UPDATE_TETRI, MOVE_LEFT, MOVE_RIGHT} from "../constants/action_types";

const initialState = {
	colors: 'red',
	CaseState: [[0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
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
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],],
	Tetriminos: [0, 5],
	TetriType: "I",
	TetriRot: 0,
};

const rootReducer = (state = initialState, action) => {
	// console.log("payload dans le reducer : " + action.gamePayload);
	switch (action.type) {
		case CHANGE_COLOR:
			return {...state, colors: action.payload};
		case UPDATE_TETRI:
			return {...state, Tetriminos: action.tetriPayload, CaseState: action.gamePayload};
		case MOVE_LEFT:
			return {...state, Tetriminos: action.tetriPayload, CaseState: action.gamePayload};
		case MOVE_RIGHT:
			return {...state, Tetriminos: action.tetriPayload, CaseState: action.gamePayload};
		default:
			return state;
	}
};

export default rootReducer;