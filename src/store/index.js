import {applyMiddleware, combineReducers, createStore} from "redux";
import {ratesReducer} from "./ratesReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    rates: ratesReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
