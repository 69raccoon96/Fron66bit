import {Field, Form} from "react-final-form";
import React from "react";
import s from "./Login.module.css";
import logo from "./../../assets/images/logo_black.png";

const Login = (props) => {
    const validation = values => {
        const errors = {}
        if (!values.login) {
            errors.login = 'Поле обязательное'
        } else if (values.login.length <= 3)
            errors.login = "Длина должна быть больше 3"
        if (!values.password) {
            errors.password = 'Поле обязательное'
        }

        return errors;
    };

    return (
        <div className={s.wrapper}>

            <div className={s.inner}>
                <img alt={"logo"} src={logo} className={s.img}/>
                <h1 className={"text-center"}>Выполните вход</h1>
                <LoginForm login={props.login} validation={validation}/>
            </div>
        </div>
    )
}

const LoginForm = (props) => (<Form onSubmit={(values) => props.login(values)}
                                    validate={props.validation}
                                    render={({handleSubmit}) => (
                                        <form onSubmit={handleSubmit} className={s.form}>
                                            <div className={"align-content-center"}>
                                                <Field name="login">
                                                    {({input, meta}) => (
                                                        <div>
                                                            <input {...input} type="login" placeholder="Логин"
                                                                   className={s.input}/>
                                                            {meta.error && meta.touched &&
                                                            <div
                                                                className={s.error + " text-center mb-2"}>{meta.error}</div>}
                                                        </div>
                                                    )}
                                                </Field>

                                                <Field name="password">
                                                    {({input, meta}) => (
                                                        <div>
                                                            <input className={s.input} {...input} type="password"
                                                                   placeholder={"Пароль"}/>
                                                            {meta.error && meta.touched &&
                                                            <div
                                                                className={s.error + " text-center mb-2"}>{meta.error}</div>}
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>

                                            <button className={s.button} type="submit">Войти</button>
                                        </form>
                                    )}
/>)


export default Login;
