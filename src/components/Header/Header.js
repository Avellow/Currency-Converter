import React from "react";
import style from './Header.module.scss'
import {NavLink} from "react-router-dom";
import AuthStatus from "../AuthStatus/AuthStatus";

const Header = () => {

    return (
        <header className={style.container}>
            <NavLink to='/converter'>Converter</NavLink>
            <AuthStatus />
        </header>
    )
}

export default Header;
