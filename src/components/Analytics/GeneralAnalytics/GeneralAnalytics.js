import React from 'react';
import s from './GeneralAnalytics.module.css';
import {NavLink} from "react-router-dom";

const GeneralAnalytics = (props) => {

    return <div>
        <div className={s.header}>
            Результаты:
        </div>
        <div className={s.projectBriefBody}>
            <NavLink to={"/analytics/card"}>
                Перейти
            </NavLink>
        </div>
    </div>
};

export default GeneralAnalytics;