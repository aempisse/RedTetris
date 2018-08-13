import store from "./store/index.js"
import * as nameForm from "./actions/nameForm.js";
import {updateGameList} from "./actions/updateGameList.js";

export const register = (playerName) => {
    store.dispatch(nameForm.updateUserName(playerName));
}

export const gameList = (gameList) => {
    store.dispatch(updateGameList(gameList));
}