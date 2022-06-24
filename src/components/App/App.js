import './App.module.scss';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addRatesFromApi} from "../../store/ratesReducer";
import s from './App.module.scss'
import CurrencyConfig from "../CurrencyConfig/CurrencyConfig";
import {changeFromCurrency, changeRate, changeToCurrency} from "../../store/converterReducer";
import {formatNum, formatValue} from "../../utils/constants";

function App() {

    const dispatch = useDispatch()

    const currencyRates = useSelector(state => state.rates.rates.rates) || {}

    const toCurrencyName = useSelector(state => state.converter.to.name)
    const toCurrencyValue = useSelector(state => state.converter.to.value)

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
        <div className={s.app}>
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
    );
}

export default App;
