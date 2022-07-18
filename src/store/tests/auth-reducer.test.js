import {authReducer, setUserData} from '../auth-reducer';

it('new user-data should be set', () => {
    // 1. test data
    let action = setUserData(4, 'vasya@mail.ru', 'vasya', true)
    let state = {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
    }
    // 2. action
    const newState = authReducer(state, action);

    // 3. expectation
    expect(newState).toEqual({
        userId: 4,
        email: 'vasya@mail.ru',
        login: 'vasya',
        isAuth: true,
    })
})
