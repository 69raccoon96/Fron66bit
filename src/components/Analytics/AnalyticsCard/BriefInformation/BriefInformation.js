import React, {memo} from "react";

const ManagerInfo = (props) => {
    return <div className={"border-bottom"}>
        <h3 className={"mb-4"}>Менеджер: {props.fullName}</h3>
        <p>Общее просроченное время: <span className={"red"}>{props.overdueTime} ч</span></p>
        <p>Количество проектов: <span className={"blue"}>{props.projectsCount} шт</span></p>
    </div>
}

const BriefInformation = (props) => {
    const managersInfo = props.brief.map((m, index) =>
        <ManagerInfo key={index} fullName={m.fullName}
           overdueTime={m.overdueTime} projectsCount={m.projectsCount}/>);
    return <div>{managersInfo}</div>
};

export default memo(BriefInformation);