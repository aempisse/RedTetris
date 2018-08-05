import {updateTetri} from "../actions/update_tetri.js";
import {store} from "../store/index.js";

const keyEnter = 13;
const keySpace = 32;
const keyLeft = 37;
const keyUp = 38;
const keyRight = 39;
const keyDown = 40;
const keyS = 83;
const keyC = 67;

const eventHandler = (event) => {
    switch (event.keyCode) {
        case keyDown:
        event.preventDefault();
        store.dispatch(updateTetri);
        break;
    }
}