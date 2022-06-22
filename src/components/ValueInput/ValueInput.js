import React from "react";
import style from './ValueInput.module.scss'

const ValueInput = (props) => {

    return (
        <div className={style.container}>
            <input
                className={style.input}
            />
            <span
                className={style.rate}
            >1 USD = 50 RUB</span>
        </div>
    )
}

export default ValueInput;
