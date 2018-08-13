import React from 'react'
//import socket from '../socket'
//import { connect } from 'http2';
import { connect } from "react-redux";
import store from "../store/index.js";
import socket from "../socket.js";
import { updateInputUserName, updateUserName } from "../actions/nameForm.js";

const client = socket();

const mapStateToProps = (state) => {
  return ({InputNameState: state.inputUserName});
};

const handleChange = (event) => {
  store.dispatch(updateInputUserName(event.target.value));
}

const HandleSubmit = (event) => {
    event.preventDefault();
    store.dispatch(updateUserName());

    const onRegisterResponse = () => console.log('User registered succesfully !');
    client.register(store.getState().UserName , (err, user) => onRegisterResponse());
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