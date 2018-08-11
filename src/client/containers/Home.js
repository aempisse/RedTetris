import React from "react";
import NameForm from "../components/nameForm.js";
import CreateGameButton from "../components/CreateGame.js";
import ExitGameRoomButton from "../components/ExitGameRoom.js";
import { connect } from "react-redux";
import store from "../store/index.js";

const mapStateToProps = (state) => {
    return ({UserNameState: state.userName});
}

const Home = ({UserNameState}) => {
    return (
        <div style={{margin: '10% 0px 0px 40%'}}>
            Hello {UserNameState} !
            <CreateGameButton />
        </div>
    )
};

export default connect(mapStateToProps)(Home);