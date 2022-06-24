import React from "react";

const RateInfo = (props) => {
    const {
        mainCurrency,
        secondaryCurrency,
        rate
    } = props;

    return (
        <div>
            <p>{`1 ${mainCurrency} = ${rate} ${secondaryCurrency}`}</p>
        </div>
    )
}

export default RateInfo;
