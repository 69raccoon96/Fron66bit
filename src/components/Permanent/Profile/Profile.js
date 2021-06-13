import React, {memo} from 'react';
import s from './Profile.module.css';
import QuitTrans from "../../../assets/svgImages/QuitTrans.svg";

const Profile = (props) => {
    return <div className={"pr " + s.wrapper}>
        <div className={"d-inline-block"}>
            {`${props.firstName} ${props.lastName}`}
        </div>
        <button className={s.button} onClick={props.logout}><img className={s.img} src={QuitTrans || ""} alt={"quit"}/> Выйти</button>
    </div>

};

export default memo(Profile);