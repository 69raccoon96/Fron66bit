import React from 'react';
import s from './Analytics.module.css';
import Filter from "../Filter/Filter";
import GeneralAnalytics from "./GeneralAnalytics/GeneralAnalytics";

const Analytics = (props) => {
    return <div className={s.body}>
        <Filter managers={props.managers} customers={props.customers} projects={props.projectsFilter}
                get={props.getGeneral}/>
        {props.managersIds.length > 0 && props.projectsIds.length > 0 ? <GeneralAnalytics/> : undefined}
    </div>
};

export default Analytics;