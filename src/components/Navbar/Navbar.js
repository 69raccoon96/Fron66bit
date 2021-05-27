import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return <nav className={s.navbar}>
        <div className={s.link}>
            <NavLink to={"/projects"} activeClassName={s.activeLink}>Проекты</NavLink>
        </div>
        <div className={`${s.link} ${s.activeLink}`}>
            <NavLink to={"/analytics"} activeClassName={s.activeLink}>Аналитика</NavLink>
        </div>
    </nav>
};

export default Navbar;