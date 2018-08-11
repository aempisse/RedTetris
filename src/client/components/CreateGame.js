import React from "react"
import { connect } from "react-redux";
import {createGameRoom} from "../actions/createGameRoom";
import store from "../store/index.js"

const CreateNewRoom = () => {
	store.dispatch(createGameRoom());
}

const CreateGameButton = () => {
	return (
		<div>
            	<button onClick={CreateNewRoom}>Create New Game</button>
		</div>
	)
}

export default CreateGameButton;