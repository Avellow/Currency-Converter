import React from "react";
import style from './AuthInput.module.scss'

const AuthInput = React.forwardRef((props, ref) => {
    const {
        labelText = 'Input',
        error,
        ...inputProps
    } = props

    return (
        <div className={style.container}>
            <label>
                {labelText}
                <input
                    ref={ref}
                    {...inputProps}
                />
            </label>
            {error && <span>{ error.message || 'Поле заполненно некорректно' }</span>}
        </div>
    )
})

export default AuthInput;
