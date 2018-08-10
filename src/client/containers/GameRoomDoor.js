import React from "react";
import CreateGameButton from "../components/CreateGame.js";

const GameRoomDoor = () => {
    return (
        <div style={{margin: '0px 0px 0px 10%'}}>
            <CreateGameButton />
            {/* <ExitGameRoomButton /> */}
        </div>
    );
}

export default GameRoomDoor;