import React from "react";
import style from './RateCard.module.scss'

const RateCard = (props) => {
    const {
        base,
        currency,
        rate,
    } = props

    return (
        <div className={style.container}>
            <h3>{ rate }</h3>
            <p>{ base } - { currency }</p>
        </div>
    )
}

export default RateCard;
