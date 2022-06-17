const defaultState = {
    base: 'USD',
    rates: {}
}

const ADD_RATE = 'ADD_RATE'
const ADD_RATES = 'ADD_RATES'

export const ratesReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_RATES:
            return {...state, rates: action.payload}
        default:
            return state;
    }
}

//export const addRate = (payload) => ({type: ADD_RATE, payload})
export const addRates = (payload) => ({type: ADD_RATES, payload})
