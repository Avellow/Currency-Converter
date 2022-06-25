import React from "react";
import style from './RateInfo.module.scss'

const RateInfo = (props) => {
    const {
        mainCurrency,
        secondaryCurrency,
        rate
    } = props;

    return (
        <div>
            <p className={ style.subtitle }>
                {`1 ${mainCurrency} = ${rate} ${secondaryCurrency}`}
            </p>
        </div>
    )
}

export default RateInfo;
