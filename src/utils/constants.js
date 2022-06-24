import RatesApi from "./RatesApi";

export const ratesApi = new RatesApi('https://currate.ru/api', 'd57d5ba5c0920d7fff7f7d26e8d315f4')

export const formatNum = (num) => num ? (Math.floor(num * 10000) / 10000) : ''
export const formatValue = (value) => value ? ('' + value).replace(/^0+/, '') : ''

export const getFormatedDate = (date) => {
    if (!date) return 'дата не определена'

    const dateObject = new Date(date)
    return `${dateObject.toLocaleTimeString()} ${dateObject.toLocaleDateString()}`
}
