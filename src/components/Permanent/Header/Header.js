import React, {memo} from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return <div className={s.header}/>
};

export default memo(Header);