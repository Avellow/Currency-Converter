import React from "react";
import CurrencyList from "../CurrencyList/CurrencyList";
import ValueInput from "../ValueInput/ValueInput";
import {useSelector} from "react-redux";

const CurrencyConfig = (props) => {
    const {
        convertType,
        onCurrencyChange,
        onValueChange,
        children,
    } = props

    const currencies = useSelector(state => state.rates.rates) || {}
    const { name, value } = useSelector(state => state.converter[convertType])

    return (
        <div>
            <CurrencyList
                currencies={Object.keys(currencies)}
                onCurrencyChange={onCurrencyChange}
                selectedCurrency={name}
                convertType={convertType}
            />
            <ValueInput
                convertType={convertType}
                value={value}
                onValueChange={onValueChange}
            />
            { children }
        </div>
    )
}

export default CurrencyConfig;
