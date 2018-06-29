import React from 'react'
// import ReactDom from 'react-dom'
import { render } from "react-dom";
// import createLogger from 'redux-logger'
// import thunk from 'redux-thunk'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'                                                                                                                                                    
// import {storeStateMiddleWare} from './middleware/storeStateMiddleWare'
// import rootReducer from './reducers/index.js'
import App from './containers/app'
// import {alert} from './actions/alert'
import store from "./store/index";


render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('tetris'))
