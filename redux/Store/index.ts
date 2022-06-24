import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

//import reducer from "./Reducer";
import {Reducers} from "../Reducer/root";
import {rootSagas} from "../Saga/root";


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(Reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSagas);
