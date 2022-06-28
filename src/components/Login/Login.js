import React from "react";
import style from './Login.module.scss'
import {useForm} from "react-hook-form";
import AuthInput from "../AuthInput/AuthInput";
import AuthForm from "../AuthForm/AuthForm";

const Login = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: "onBlur"});


    const onSubmit = data => console.log(data)

    return (
        <AuthForm title='Авторизация' onSubmit={handleSubmit(onSubmit)}>
            <AuthInput
                labelText='Логин'
                error={errors.name}
                {...register('name', {maxLength: 5})}
            />
            <AuthInput
                labelText='Пароль'
                {...register('password')}
                type='password'
                error={errors.password}
            />
        </AuthForm>
    )
}

export default Login;
