import React from 'react'
//import { connect } from 'http2';
import { connect } from "react-redux";
import store from "../store/index.js";
import {register} from "../socketClient.js";
import { updateInputUserName, updateUserName } from "../actions/nameForm.js";

const mapStateToProps = (state) => {
  return ({InputNameState: state.inputUserName});
};

const handleChange = (event) => {
  store.dispatch(updateInputUserName(event.target.value));
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