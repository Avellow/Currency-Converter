import {combineReducers, createStore} from "redux";
import {ratesReducer} from "./ratesReducer";


const rootReducer = combineReducers({
    rates: ratesReducer
})

export const store = createStore(rootReducer)
