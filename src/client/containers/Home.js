import React from "react";
import NameForm from "../components/nameForm.js";
import GameRoomDoor from "./GameRoomDoor.js";

const Home = () => {
    return (
        <div style={{margin: '10% 0px 0px 40%'}}>
            <NameForm />
            <GameRoomDoor />
        </div>
    )
};

export default Home;