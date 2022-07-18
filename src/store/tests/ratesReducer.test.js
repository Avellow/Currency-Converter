import {addRates, ratesReducer} from '../ratesReducer';

const state = {
    base: 'USD',
    rates: {}
}

it('should add currency rates-data', () => {
    // 1. test data
    const ratesData = {
        base: 'USD',
        rates: {
            RUB: 60,
            EUR: 1,
            AUD: 0.72
        }
    }
    const action = addRates(ratesData);

    // 2. action
    const newState = ratesReducer(state, action);

    // 3. expectation
    expect(newState).toEqual({
        base: 'USD',
        rates: {
            RUB: 60,
            EUR: 1,
            AUD: 0.72
        }
    })
})
