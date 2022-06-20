import React from "react";

const Converter = (props) => {
    const {
        from,
        to,
        result,
        err,
        calc,
        onFromChange,
        onToChange,
        onValueChange,
        value
    } = props;

    const onCalc = () => {
        calc()
    }

    return (
        <div>
            <input
                onChange={(e => onValueChange(e.target.value))}
                value={value}
            />
            <input
                value={from}
                onChange={(e) => onFromChange(e.target.value)}
            /> in
            <input
                value={to}
                onChange={(e) => onToChange(e.target.value)}
            /> = {result}

            <button
                onClick={onCalc}
            >посчитать</button>

            {err && (<p>{ err }</p>)}
        </div>
    )
}

export default Converter;
