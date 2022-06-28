import React from "react";
import style from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.container}>
            <NavLink to='/converter'>Converter</NavLink>
            <NavLink to='/admin'>admin</NavLink>
        </div>
    )
}

export default Header;
