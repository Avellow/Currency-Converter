import React from "react";
import style from './RadioButton.module.scss'

const RadioButton = (props) => {
    const {
        value,
        onClick,
        isChecked,
        name,
        ...restProps
    } = props

    return (
        <>
            <input
                className={style.input}
                type='radio'
                value={value}
                id={name + value}
                onChange={() => onClick(value)}
                checked={isChecked}
                {...restProps}
            />
            <label className={style.label} htmlFor={name+value}>{value}</label>
        </>
    )
}

export default RadioButton;
