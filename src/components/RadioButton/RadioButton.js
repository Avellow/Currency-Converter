import React from "react";
import style from './RadioButton.module.scss'

const RadioButton = (props) => {
    const {
       value,
    } = props

    return (
        <>
            <input
                className={style.input}
                type='radio'
                name='cur'
                value={value}
                id={value}
            />
            <label className={style.label} htmlFor={value}>{value}</label>
        </>
    )
}

export default RadioButton;
