import React, {useState} from "react";
import style from './CurrencyList.module.scss';
import RadioButton from "../RadioButton/RadioButton";
import Popup from "../Popup/Popup";

const CurrencyList = (props) => {
    const {currencies} = props


    const base = ['usd', 'rub', 'eur'] // из пропсов
    const additional = 'jpy' // в состояние

    const [isPopupOpened, setIsPopupOpened] = useState(false);

    function openPopup() {
        setIsPopupOpened(true)
    }

    function closePopup() {
        setIsPopupOpened(false)
    }

    return (
        <div className={style.container}>
            {
                base.map((cur, i) => (<RadioButton key={i} value={cur} />))
            }
            <RadioButton value={additional} />
            <button
                className={style.button}
                onClick={openPopup}
            >Еще</button>
            <Popup isOpened={isPopupOpened} onClose={closePopup}>
                <ul>
                    {
                        currencies.map((curr, i) => <li key={i}>{curr}</li>)
                    }
                </ul>
            </Popup>
        </div>
    )
}

export default CurrencyList;
