import React from "react"
import { connect } from "react-redux";
import {createGameRoom} from "../actions/createGameRoom";
import store from "../store/index.js"
import {gameList} from "../socketClient.js";


const CreateNewRoom = () => {
	gameList(store.getState().userName);
}

const CreateGameButton = () => {
	return (
		<div style={{margin: "0px 0px 5px 10%"}}>
            	<button onClick={CreateNewRoom}>Create New Game</button>
		</div>
	)
}

export default CreateGameButton;