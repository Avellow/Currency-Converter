import {applyMiddleware, combineReducers, createStore} from "redux";
import {ratesReducer} from "./ratesReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {converterReducer} from "./converterReducer";


const rootReducer = combineReducers({
    rates: ratesReducer,
    converter: converterReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
