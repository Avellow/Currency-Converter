import {changeFromCurrency, changeRate, changeToCurrency, converterReducer, swap} from '../converterReducer';

const state = {
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

it ('should change currency that converted from', () => {
    // 1. test data
    const action = changeFromCurrency('RUB', 50);

    // 2. action
    const newState = converterReducer(state, action);

    // 3. expectation
    expect(newState).toEqual({
        from: {
            name: 'RUB',
            value: 50
        },
        to: {
            name: 'USD',
            value: 1
        },
        rate: 1
    })
})

it ('should change currency that converted to', () => {
    // 1. test data
    const action = changeToCurrency('RUB', 50);

    // 2. action
    const newState = converterReducer(state, action);

    // 3. expectation
    expect(newState).toEqual({
        from: {
            name: 'USD',
            value: 1
        },
        to: {
            name: 'RUB',
            value: 50
        },
        rate: 1
    })
})

it ('should change rate', () => {
    // 1. test data
    const action = changeRate(1.5);

    // 2. action
    const newState = converterReducer(state, action);

    // 3. expectation
    expect(newState).toEqual({
        from: {
            name: 'USD',
            value: 1
        },
        to: {
            name: 'USD',
            value: 1
        },
        rate: 1.5
    })
})

it('should swap currencies and rate', () => {
    // 1. test data
    const stateWithDifferentCurrencies = {
        from: {
            name: 'RUB',
            value: 50
        },
        to: {
            name: 'USD',
            value: 1
        },
        rate: 2
    }

    const action = swap();

    // 2. action
    const newState = converterReducer(stateWithDifferentCurrencies, action);

    // 3. expectation
    expect(newState).toEqual({
        from: {
            name: 'USD',
            value: 1
        },
        to: {
            name: 'RUB',
            value: 50
        },
        rate: 0.5
    })

})


