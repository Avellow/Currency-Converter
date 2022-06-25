import React, {useEffect} from "react";
import style from './Converter.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addRatesFromApi} from "../../store/ratesReducer";
import {formatNum, formatValue, getFormatedDate} from "../../utils/constants";
import {changeFromCurrency, changeRate, changeToCurrency} from "../../store/converterReducer";
import s from "../App/App.module.scss";
import CurrencyConfig from "../CurrencyConfig/CurrencyConfig";

const Converter = () => {

    const dispatch = useDispatch()

    const currencyRates = useSelector(state => state.rates.rates) || {}
    const lastUpdate = useSelector(state => state.rates.putISODate) || ''

    const toCurrencyName = useSelector(state => state.converter.to.name)

    const fromCurrencyName = useSelector(state => state.converter.from.name)
    const fromCurrencyValue = useSelector(state => state.converter.from.value)

    const rate = useSelector(state => state.converter.rate)

    useEffect(() => dispatch(addRatesFromApi()), [])

    function onToCurrencyChange(currency) {
        const newRate = formatNum(currencyRates[currency] / currencyRates[fromCurrencyName])
        const newToValue = formatNum(fromCurrencyValue * newRate)

        dispatch(changeToCurrency(currency, newToValue))
        dispatch(changeRate(newRate))
    }

    function onFromCurrencyChange(currency) {
        const newRate = formatNum(currencyRates[toCurrencyName] / currencyRates[currency])
        const newToValue = formatNum(fromCurrencyValue * newRate)

        dispatch(changeFromCurrency(currency, fromCurrencyValue))
        dispatch(changeToCurrency(toCurrencyName, newToValue))
        dispatch(changeRate(newRate))
    }

    function onFromValueChange(newValue) {
        const newToCurrencyValue = formatNum(newValue * rate)
        dispatch(changeFromCurrency(fromCurrencyName, formatValue(newValue)))
        dispatch(changeToCurrency(toCurrencyName, newToCurrencyValue))
    }

    function onToValueChange(newValue) {
        const newFromCurrencyValue = formatNum(newValue / rate)
        dispatch(changeToCurrency(toCurrencyName, formatValue(newValue)))
        dispatch(changeFromCurrency(fromCurrencyName, newFromCurrencyValue))
    }

    return (
        <div>
            <div className={style.container}>
                <CurrencyConfig
                    convertType='from'
                    onCurrencyChange={onFromCurrencyChange}
                    onValueChange={onFromValueChange}
                />
                <CurrencyConfig
                    convertType='to'
                    onCurrencyChange={onToCurrencyChange}
                    onValueChange={onToValueChange}
                />
            </div>
            <p className={style.updateinfo}>
                {'Курсы актуальны на момент: ' + getFormatedDate(lastUpdate)}
            </p>
        </div>
    );
}

export default Converter;
