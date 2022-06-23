import React from "react";
import style from './ValueInput.module.scss'

const ValueInput = (props) => {
    const {
        value,
        onValueChange,
    } = props

    function onChange(e) {
        const num = e.target.value
        onValueChange(num)
    }

    return (
        <div className={style.container}>
            <input
                className={style.input}
                value={value}
                onChange={onChange}
            />
            <span
                className={style.rate}
            >1 USD = 50 RUB</span>
        </div>
    )
}

export default ValueInput;
