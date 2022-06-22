import React, {useState} from "react";
import style from './CurrencyList.module.scss';
import RadioButton from "../RadioButton/RadioButton";
import Popup from "../Popup/Popup";

const CurrencyList = (props) => {
    const {
        currencies,
        onCurrencyChange,
        selectedCurrency,
        convertType,
    } = props


    const base = ['USD', 'RUB', 'EUR'] // из пропсов

    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const [additionalCurrency, setAdditionalCurrency] = useState('JPY')

    function openPopup() {
        setIsPopupOpened(true)
    }

    function closePopup() {
        setIsPopupOpened(false)
    }

    function changeAdditionalCurrency(currency) {
        setAdditionalCurrency(currency)
        onCurrencyChange(currency)
        closePopup();
    }

    function isCurrencyChecked(currency) {
        return currency === selectedCurrency;
    }

    return (
        <div className={style.container}>
            {
                base.map((cur, i) => (
                        <RadioButton
                            key={i}
                            value={cur}
                            name={convertType}
                            onClick={onCurrencyChange}
                            isChecked={isCurrencyChecked(cur)}
                        />
                    )
                )
            }
            <RadioButton
                value={additionalCurrency}
                onClick={onCurrencyChange}
                name={convertType}
                isChecked={isCurrencyChecked(additionalCurrency)}
            />
            <button
                className={style.button}
                onClick={openPopup}
            >Еще</button>
            <Popup isOpened={isPopupOpened} onClose={closePopup}>
                <ul className={style}>
                    {
                        currencies.map((curr, i) => (
                                <li
                                    className={style.additional}
                                    key={i}
                                    onClick={() => changeAdditionalCurrency(curr)}
                                >{curr}</li>
                            )
                        )
                    }
                </ul>
            </Popup>
        </div>
    )
}

export default CurrencyList;
