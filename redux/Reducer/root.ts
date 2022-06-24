import {combineReducers, Reducer} from "redux";
import { AppState } from "./app/appInitState";
import appReducer from "./app/appReducer";
import { AuthState } from "./auth/authInitState";
import authReducer from "./auth/authReducer";
import { UserState } from "./user/userInitState";
import userReducer from "./user/userReducer";
import myQloudReducer from "./myQloud/myQloudReducer"
import{MyQloudState} from "./myQloud/myQloudInitState"


export const Reducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    app: appReducer,
   myQloud:myQloudReducer
});


export type RootState = {
   auth:AuthState,
   user:UserState,
   app:AppState,
   myQloud:MyQloudState
   }

