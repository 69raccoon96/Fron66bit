import React from 'react';
import s from './Header.module.css';
import img from './../../assets/images/logo_black.png';
import Arrow from "../../assets/svgImages/Arrow";

const Header = (props) => {
    return <div className={s.header}>
            <img alt="logo" className={s.img} src={img}/>
            <div className={s.name}>
                <div className={s.textName}>
                    {`${props.firstName} ${props.lastName}`}<br/>
                    Менеджер
                </div>
                <div className={s.arrowWrapper}>
                    <Arrow/>
                    <button className={s.button} onClick={props.logout}>Выйти</button>
                </div>
            </div>
    </div>
};

export default Header;