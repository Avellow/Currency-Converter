import React from "react";
import style from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/auth-reducer";

const Header = () => {

    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.auth.isAuth)
    const onLogout = () => dispatch(logout())

    return (
        <div className={style.container}>
            <NavLink to='/converter'>Converter</NavLink>
            <NavLink to='/admin'>admin</NavLink>
            {
                isAuth ? (
                    <div>
                        <p>авторизован</p>
                        <button type='button' onClick={onLogout}>Выйти</button>
                    </div>
                ) : (
                    <p>Логин</p>
                )
            }
        </div>
    )
}

export default Header;
