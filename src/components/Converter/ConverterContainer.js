import React, {useCallback, useState} from 'react';
import {changeFromCurrency, changeToCurrency, changeRate} from "../../store/converterReducer";
import Converter from "./Converter";
import {useDispatch, useSelector} from "react-redux";

const ConverterContainer = () => {

    const [value, setValue] = useState(0)

    const dispatch = useDispatch();

    const from = useSelector(state => state.converter.from)
    const to = useSelector(state => state.converter.to)
    const rate = useSelector(state => state.converter.rate)

    const baseRates = useSelector(state => state.rates.rates)

    const onFromChange = (text) => {
        dispatch(changeFromCurrency(text))
        dispatch(changeRate(baseRates[text.toUpperCase()] / baseRates[to.toUpperCase()]))
    }
    const onToChange = (text) => {
        dispatch(changeToCurrency(text))
        dispatch(changeRate(baseRates[from.toUpperCase()] / baseRates[text.toUpperCase()]))
    }

    const onValueChange = (newValue) => setValue(newValue)

    const result = useCallback(() => (value * rate).toFixed(2), [value, rate])

    return (
        <Converter
            from={from}
            to={to}
            rate={rate.toFixed(2)}
            calc={() => {}}
            onValueChange={onValueChange}
            onFromChange={onFromChange}
            onToChange={onToChange}
            result={result()}
            value={value}
        />
    )
}

export default ConverterContainer
