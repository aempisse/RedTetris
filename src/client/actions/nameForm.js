import store from "../store/index.js";
import {UPDATE_INPUT_USERNAME, UPDATE_USERNAME} from '../constants/action_types.js';

export function updateInputUserName(newName){
    return {
        type: UPDATE_INPUT_USERNAME,
        namePayload: newName, 
    }
};

export function updateUserName(){
    let newName = store.getState().InputUserName;
    return {
        type: UPDATE_USERNAME,
        namePayload: newName, 
    }
};