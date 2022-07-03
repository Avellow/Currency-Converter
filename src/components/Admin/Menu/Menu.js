import React from "react";
import {NavLink} from "react-router-dom";
import style from './Menu.module.scss'

export const Menu = () => {

    return (
        <nav>
            <ul className={style.list}>
                <li className={style.listItem}>
                    <NavLink className={style.link} to='/admin/currencies'>Все валюты</NavLink>
                </li>
                <li className={style.listItem}>
                    <NavLink className={style.link} to='/admin/dashboard'>Панель управления</NavLink>
                </li>
            </ul>
        </nav>
    )
}
