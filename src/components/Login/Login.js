import React from "react";
import {useForm} from "react-hook-form";
import AuthInput from "../AuthInput/AuthInput";
import AuthForm from "../AuthForm/AuthForm";
import {useDispatch} from "react-redux";
import {login} from "../../store/auth-reducer";

const Login = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: "onBlur"});

    const dispatch = useDispatch();

    const onSubmit = ({email, password}) => dispatch(login(email, password))

    return (
        <AuthForm title='Авторизация' onSubmit={handleSubmit(onSubmit)}>
            <AuthInput
                labelText='Email'
                type='email'
                error={errors.email}
                {
                    ...register('email', {
                        validate: {}
                    })
                }
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
