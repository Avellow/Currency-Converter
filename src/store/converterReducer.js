import {formatNum} from '../utils/constants';

const defaultState = {
    from: {
        name: 'USD',
        value: 1
    },
    to: {
        name: 'USD',
        value: 1
    },
    rate: 1
}

const CHANGE_FROM_CURRENCY = 'CHANGE_FROM_CURRENCY'
const CHANGE_TO_CURRENCY = 'CHANGE_TO_CURRENCY'
const CHANGE_RATE = 'CHANGE_RATE'
const SWAP = 'SWAP'

export const converterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_FROM_CURRENCY:
            return {...state, from: {...state.from, ...action.from}}
        case CHANGE_TO_CURRENCY:
            return {...state, to: {...state.to, ...action.to}}
        case CHANGE_RATE:
            return {...state, rate: action.payload}
        case SWAP:
            return {
                ...state,
                to: {...state.from},
                from: {...state.to},
                rate: formatNum(1 / state.rate)
            }
        default:
            return state;
    }
}

export const changeFromCurrency = (name, value) => ({type: CHANGE_FROM_CURRENCY, from: {name, value}})
export const changeToCurrency = (name, value) => ({type: CHANGE_TO_CURRENCY, to: {name, value}})
export const changeRate = (payload) => ({type: CHANGE_RATE, payload})
export const swap = () => ({ type: SWAP })
