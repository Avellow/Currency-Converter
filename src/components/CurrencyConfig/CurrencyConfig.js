import React from "react";
import CurrencyList from "../CurrencyList/CurrencyList";
import ValueInput from "../ValueInput/ValueInput";
import {useSelector} from "react-redux";

const CurrencyConfig = (props) => {
    const {
        convertType,
        onCurrencyChange,
        onValueChange,
    } = props

    const currencies = useSelector(state => state.rates.rates.rates) || {}
    const selectedCurrency = useSelector(state => state.converter[convertType])

    return (
        <div>
            <CurrencyList
                currencies={Object.keys(currencies)}
                onCurrencyChange={onCurrencyChange}
                selectedCurrency={selectedCurrency.name}
                convertType={convertType}
            />
            <ValueInput
                value={selectedCurrency.value}
                onValueChange={onValueChange}
            />
        </div>
    )
}

export default CurrencyConfig;
