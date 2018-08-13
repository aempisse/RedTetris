import React from 'react'
import { connect } from "react-redux";
import store from "../store/index.js";
import {register} from "../socketClient.js";
import { updateInputUserName } from "../actions/nameForm.js";
import {gameList} from "../socketClient.js";

const mapStateToProps = (state) => {
  return ({InputNameState: state.inputUserName});
};

const handleChange = (event) => {
  store.dispatch(updateInputUserName(event.target.value));
  gameList();
}

const HandleSubmit = (event) => {
    event.preventDefault();
    register(store.getState().InputUserName);
}

const NameForm = ({InputNameState}) => {
  return (
    <form style={{margin: '10% 0px 0px 40%'}} onSubmit={HandleSubmit}>
          <label>
            Name:
            <input type="text" name="" value={InputNameState} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
    </form>
  )
}

export default connect(mapStateToProps)(NameForm);