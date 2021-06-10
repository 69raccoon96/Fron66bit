import React from 'react';
import s from './Header.module.css';

const Header = React.memo(() => {
    return <div className={s.header}/>
});

export default Header;