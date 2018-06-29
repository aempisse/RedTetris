import {CHANGE_COLOR} from '../constants/action_types.js';
import store from "../store/index.js"

export function changeColor() {
	if (store.getState().colors === 'red')
	{
		return {
			type : CHANGE_COLOR,
			payload: 'blue'
		}
	}
	else
	{
		return {
			type : CHANGE_COLOR,
			payload: 'red'
		}
	}
};
