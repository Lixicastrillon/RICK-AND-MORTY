import {applyMiddleware, createStore,compose } from "redux"
import reducer from "./reducer"
import thunkMiddleware  from"redux-thunk"

const  composeEnhacer =Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;// esta linea es para configurar 

const store  = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware)))// nos permite hacer peticiones al servidor externo

    export default store;