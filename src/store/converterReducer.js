const defaultState = {
    from: 'USD',
    to: 'USD',
    rate: 1
}

const CHANGE_FROM_CURRENCY = 'CHANGE_FROM_CURRENCY'
const CHANGE_TO_CURRENCY = 'CHANGE_TO_CURRENCY'
const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
const CHANGE_RATE = 'CHANGE_RATE'

export const converterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_FROM_CURRENCY:
            return {...state, from: action.payload}
        case CHANGE_TO_CURRENCY:
            return {...state, to: action.payload}
        case CHANGE_RATE:
            return {...state, rate: action.payload}
        case CHANGE_CURRENCY:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export const changeFromCurrency = (payload) => ({type: CHANGE_FROM_CURRENCY, payload})
export const changeToCurrency = (payload) => ({type: CHANGE_TO_CURRENCY, payload})
export const changeCurrency = (payload) => ({type: CHANGE_CURRENCY, payload})
export const changeRate = (payload) => ({type: CHANGE_RATE, payload})
