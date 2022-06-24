import {ratesApi} from "../utils/constants";

const defaultState = {
    base: 'USD',
    rates: {}
}

const ADD_RATES = 'ADD_RATES'

export const ratesReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_RATES:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export const addRates = (payload) => ({type: ADD_RATES, payload})

export const addRatesFromApi = () => (dispatch) => {
    ratesApi
        .getRatePairs()
        .then(rates => dispatch(addRates(rates)))
}
