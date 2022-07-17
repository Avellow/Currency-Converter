import React from "react";
import style from './AuthStatus.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/auth-reducer";
import {NavLink} from "react-router-dom";


const AuthStatus = () => {

    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.auth.isAuth)
    const onLogout = () => dispatch(logout())

    return (
        <div className={style.container}>
            {
                isAuth
                    ? (
                        <div className={style.authed}>
                            <NavLink
                                to='/admin'
                                className={style.login}
                            >
                                Admin Panel
                            </NavLink>
                            <button type='button' onClick={onLogout}>Выйти</button>
                        </div>
                    )
                    : (
                        <NavLink
                            to='/admin/login'
                            className={style.login}
                        >
                            Admin Login
                        </NavLink>
                    )
            }
        </div>
    )
}

export default AuthStatus;
