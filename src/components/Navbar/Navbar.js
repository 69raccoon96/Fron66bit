import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import img from "../../assets/images/logo_black.png";

const Navbar = () => {
    return <div className={s.wrapper}>
        <img className={"logo"} alt="logo" src={img}/>
        <nav className={s.navbar}>
            <div className={s.link}>
                <NavLink to={"/projects"} activeClassName={s.activeLink}>Проекты</NavLink>
            </div>
            <div className={`${s.link} ${s.activeLink}`}>
                <NavLink to={"/analytics"} activeClassName={s.activeLink}>Аналитика</NavLink>
            </div>
        </nav>
    </div>
};

export default Navbar;