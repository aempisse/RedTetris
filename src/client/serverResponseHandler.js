import store from "./store/index.js"
import * as nameForm from "./actions/nameForm.js";

export const register = (playerName) => {
    console.log(playerName);
    store.dispatch(nameForm.updateUserName(playerName));
}
