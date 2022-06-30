export const setUserDataToStorage = (userId, email, login, isAuth) => {
    try {
        localStorage.setItem('userData', JSON.stringify({userId, email, login, isAuth}))
    } catch (err) {
        console.log(err)
        return undefined
    }
}

export const getUserDataFromStorage = () => {
    try {
        const userData = localStorage.getItem('userData')
        return userData ? JSON.parse(userData) : undefined
    } catch (err) {
        console.log(err)
    }
}
