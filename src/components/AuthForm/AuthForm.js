import React from "react";
import style from './AuthForm.module.scss'

const AuthForm = (props) => {
    const {
        title,
        submitText = 'Отправить',
        children,
        onSubmit,
    } = props

    return (
        <form
            className={style.container}
            onSubmit={onSubmit}
        >
            <h2>{ title }</h2>
            { children }
            <button className={style.submit} type="submit">{ submitText }</button>
        </form>
    )
}

export default AuthForm;
