const defaultState = {
    from: {
        name: 'USD',
        value: 0
    },
    to: {
        name: 'USD',
        value: 0
    },
    rate: 1
}

const CHANGE_FROM_CURRENCY = 'CHANGE_FROM_CURRENCY'
const CHANGE_TO_CURRENCY = 'CHANGE_TO_CURRENCY'
const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
const CHANGE_RATE = 'CHANGE_RATE'

export const converterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_FROM_CURRENCY:
            return {...state, from: {...state.from, ...action.from}}
        case CHANGE_TO_CURRENCY:
            return {...state, to: {...state.to, ...action.to}}
        case CHANGE_RATE:
            return {...state, rate: action.payload}
        case CHANGE_CURRENCY:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export const changeFromCurrency = (name, value) => ({type: CHANGE_FROM_CURRENCY, from: {name, value}})
export const changeToCurrency = (name, value) => ({type: CHANGE_TO_CURRENCY, to: {name, value}})
export const changeCurrency = (payload) => ({type: CHANGE_CURRENCY, payload})
export const changeRate = (payload) => ({type: CHANGE_RATE, payload})
