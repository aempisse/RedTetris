import {CHANGE_COLOR, UPDATE_TETRI, TETRI_MOVE, UPDATE_INPUT_USERNAME, UPDATE_USERNAME, NEW_GAME_ROOM, EXIT_GAME_ROOM} from "../constants/action_types";
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
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],],
	Tetriminos: newTetriminos(),
	CollisionBool: 0,
	InputUserName: "",
	userName: "Player",
	pageIndex: 0,
	ListGame: [{id: '0123', players: [
		{playerName: 'jean-michel', id: '42'},
		{playerName: 'michelle-jean', id: '27'}]},
			{id: '6789', players: [
		{playerName: 'max', id: '84'},
		{playerName: 'axel', id: '65'}]},
			{id: '0278', players: [
		{playerName: 'gege', id: '92'},
		{playerName: 'paul', id: '82'},
		{playerName: 'dede', id: '15'}]}],
};

const rootReducer = (state = initialState, action) => {
	//  console.log("payload dans le reducer : " + action.namePayload);
	switch (action.type) {
		case CHANGE_COLOR:
			return {...state, colors: action.payload};
		case UPDATE_TETRI:
			return {...state, Tetriminos: action.tetriPayload, CaseState: action.gamePayload, CollisionBool: action.CollisionUpdate};
		case TETRI_MOVE:
			return {...state, Tetriminos: action.tetriPayload, CaseState: action.gamePayload};
		case UPDATE_INPUT_USERNAME:
			return {...state, InputUserName: action.namePayload};
		case UPDATE_USERNAME:
			return {...state, userName: action.namePayload, pageIndex: action.pageIndexPayload};
		case NEW_GAME_ROOM:
			return {...state, pageIndex: action.pageIndexPayload};
		case EXIT_GAME_ROOM:
			return {...state, pageIndex: action.pageIndexPayload};	
		default:
			return state;
	}
};

export default rootReducer;