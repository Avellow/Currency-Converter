import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0'

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        "API-KEY": "596cc275-8429-45c6-8df6-852d64e8685c"
    }
})

const checkResult = (res) => res.data.resultCode === 0 ? res.data : Promise.reject(res.status)

export const auth = {
    login(email, password) {
        return instance.post('/auth/login', { email, password }).then(checkResult)
    },
    logout() {
        return instance.delete('/auth/login').then(checkResult)
    },
    me() {
        return instance.get('/auth/me').then(checkResult)
    },
}
