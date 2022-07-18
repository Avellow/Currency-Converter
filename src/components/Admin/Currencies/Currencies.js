import React from "react";
import RateCard from "../RateCard/RateCard";
import style from './Currencies.module.scss'
import {useSelector} from "react-redux";

const Currencies = () => {

    const {base, rates} = useSelector(state => state.rates)



    return (
        <div>
            <h2>Валютные пары к USD</h2>
            <ul className={style.list}>
                {
                    Object.keys(rates).map((rate, i) => {
                        return (
                            <RateCard
                                base={base}
                                currency={rate}
                                rate={rates[rate].toFixed(4)}
                                key={i}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Currencies;
