import React from "react";
import CurrencyList from "../CurrencyList/CurrencyList";
import ValueInput from "../ValueInput/ValueInput";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrency} from "../../store/converterReducer";

const CurrencyConfig = (props) => {
    const {
        convertType,
    } = props

    const currencies = useSelector(state => state.rates.rates.rates) || {}
    const dispatch = useDispatch()

    function onCurrencyChange(currency) {
        dispatch(changeCurrency({ [convertType]: currency }))
    }

    return (
        <div>
            <CurrencyList
                currencies={Object.keys(currencies)}
                onCurrencyChange={onCurrencyChange}
            />
            <ValueInput />
        </div>
    )
}

export default CurrencyConfig;
