import React from "react";
import GameBoard from "./GameBoard.js"
import ExitGame from "../components/ExitGameRoom.js"

const InGame = () =>{
    return (
        <div>
            <GameBoard />
            <ExitGame />
        </div>
    );
}

export default InGame;