import React, {useState} from 'react';
import {changeFromCurrency, changeToCurrency} from "../../store/converterReducer";
import Converter from "./Converter";
import {useDispatch, useSelector} from "react-redux";

const ConverterContainer = () => {

    const [value, setValue] = useState(0)
    const [result, setResult] = useState({ value: 0, err: null })

    const dispatch = useDispatch();

    const from = useSelector(state => state.converter.from)
    const to = useSelector(state => state.converter.to)
    const rate = useSelector(state => state.converter.rate)
    const baseRates = useSelector(state => state.rates.rates.rates)

    const onFromChange = (text) => {
        setResult((prevState => ({ ...prevState, value: 0, err: null })))
        dispatch(changeFromCurrency(text.toUpperCase()))
    }
    const onToChange = (text) => {
        setResult((prevState => ({ ...prevState, value: 0, err: null })))
        dispatch(changeToCurrency(text.toUpperCase()))
    }

    // с проверкой чтобы новое значение было число или пустая строка
    const onValueChange = (newValue) =>
        (/^[0-9\b]+$/.test(newValue) || !newValue) && setValue(newValue)

    const getConvertedResult = () => {

        if (!baseRates)
            return setResult((prevState => ({ ...prevState, value: 0, err: 'Торговые пары не загружены' })))
        if (!baseRates[to] || !baseRates[from])
            return setResult((prevState => ({ ...prevState, value: 0, err: 'Валютная пара не найдена' })))

        const result = (value * (baseRates[to] / baseRates[from])).toFixed(2)
        setResult((prevState => ({ ...prevState, value: result, err: null })))
    }

    return (
        <Converter
            from={from}
            to={to}
            rate={rate.toFixed(2)}
            calc={getConvertedResult}
            onValueChange={onValueChange}
            onFromChange={onFromChange}
            onToChange={onToChange}
            result={result.value}
            err={result.err}
            value={value}
        />
    )
}

export default ConverterContainer
