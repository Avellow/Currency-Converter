import React from "react";
import style from './Swapper.module.scss'
import icon from '../../images/arrows/swap.svg'

const Swapper = (props) => {
    const { onSwap } = props

    function onClickHandler() {
        onSwap()
    }

    return (
        <div className={style.container}>
            <img
                className={style.icon}
                src={icon}
                alt='swap arrows'
                onClick={onClickHandler}
            />
        </div>
    )
}

export default Swapper;
