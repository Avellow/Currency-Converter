import React from "react";

const Converter = (props) => {
    const {
        from,
        to,
        rate,
        result,
        calc,
        onFromChange,
        onToChange,
        onValueChange,
        value
    } = props;

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
                onClick={calc}
            >посчитать</button>
        </div>
    )
}

export default Converter;
