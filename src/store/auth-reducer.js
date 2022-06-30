import {auth} from "../utils/auth";
import {getUserDataFromStorage, setUserDataToStorage} from "../localStorage/userData";

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = getUserDataFromStorage() || {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) =>
    ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth }})

// thunk'и
export const getUserData = () => (dispatch) => {
    auth
        .me()
        .then(data => {
            const { email, id, login, isAuth = true } = data.data
            dispatch(setUserData(id, email, login, isAuth))
            setUserDataToStorage(id, email, login, isAuth)
        })
}
export const login = (email, password) => (dispatch) => {
    auth
        .login(email, password)
        .then(() => dispatch(getUserData()))
}
export const logout = () => (dispatch) => {
    auth
        .logout()
        .then(() => {
            dispatch(setUserData(null, null, null, false))
            localStorage.clear()
        })
}
