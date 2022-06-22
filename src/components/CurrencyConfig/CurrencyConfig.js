import React from "react";
import CurrencyList from "../CurrencyList/CurrencyList";
import ValueInput from "../ValueInput/ValueInput";
import {useSelector} from "react-redux";

const CurrencyConfig = (props) => {
    const currencies = useSelector(state => state.rates.rates.rates) || {}

    return (
        <div>
            <CurrencyList
                currencies={Object.keys(currencies)}
            />
            <ValueInput />
        </div>
    )
}

export default CurrencyConfig;
