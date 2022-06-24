import React from "react";
import style from './ValueInput.module.scss'
import {useSelector} from "react-redux";
import RateInfo from "../RateInfo/RateInfo";
import {formatNum} from "../../utils/constants";

const ValueInput = (props) => {
    const {
        value,
        onValueChange,
        convertType,
    } = props

    const converterInfo = useSelector(state => state.converter)

    function onChange(e) {
        onValueChange(e.target.value)
    }

    function generateRateInfo() {
        const mainCurrency = convertType === 'to' ? converterInfo.to.name : converterInfo.from.name
        const secondaryCurrency = convertType === 'to' ? converterInfo.from.name : converterInfo.to.name
        const rate = convertType === 'to' ? formatNum(1 / converterInfo.rate) : converterInfo.rate

        return (
                <RateInfo
                    mainCurrency={ mainCurrency }
                    secondaryCurrency={ secondaryCurrency }
                    rate={ rate }
                />
            )
    }

    return (
        <div className={style.container}>
            <input
                className={style.input}
                value={value}
                onChange={onChange}
                type='input'
                onBlur={(e) => onValueChange(formatNum(e.target.value))}
            />
            { generateRateInfo() }
        </div>
    )
}

export default ValueInput;
