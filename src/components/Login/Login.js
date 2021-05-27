import {Field, Form} from "react-final-form";
import React from "react";
import s from "./Login.module.css";
import logo from "./../../assets/images/logo_black.png";

const Login = (props) => {
    const validation = values => {
        const errors = {}
        if (!values.login) {
            errors.login = 'Required'
        } else if (values.login.length <= 3)
            errors.login = "Длинна должна быть больше 3"
        if (!values.password) {
            errors.password = 'Required'
        }

        return errors;
    };

    return (
        <div className={s.wrapper}>
            <div className={s.inner}>
                <img alt={"logo"} src={logo} className={s.img}/>
                <h1>Выполните вход</h1>
                <LoginForm login={props.login} validation={validation}/>
            </div>
        </div>
    )
}

const LoginForm = (props) => (<Form onSubmit={(values) => props.login(values)}
                                    validate={props.validation}
                                    render={({handleSubmit}) => (
                                        <form onSubmit={handleSubmit} className={s.form}>
                                            <Field name="login">
                                                {({input, meta}) => (
                                                    <div>
                                                        <input {...input} type="login" placeholder="Логин"
                                                               className={s.input}/>
                                                        {meta.error && meta.touched &&
                                                        <div>{meta.error}</div>}
                                                    </div>
                                                )}
                                            </Field>


                                            <Field name="password">
                                                {({input, meta}) => (
                                                    <div>
                                                        <input className={s.input} {...input} type="password"
                                                               placeholder={"Пароль"}/>
                                                        {meta.error && meta.touched &&
                                                        <div>{meta.error}</div>}
                                                    </div>
                                                )}
                                            </Field>

                                            <label>
                                                Remember me? {" "}
                                                <Field name="rememberMe" component={"input"} type={"checkbox"}/>
                                                Пока не работает
                                            </label>
                                            <button className={s.button} type="submit">Войти</button>
                                        </form>
                                    )}
/>)


export default Login;
