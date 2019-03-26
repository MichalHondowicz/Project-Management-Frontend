import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState = {};
const middleWare = [thunk];

let store;

if (!window.navigator.userAgent.includes("Chrome")) {
    store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleWare),));
} else {
    store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));
}

export default store;