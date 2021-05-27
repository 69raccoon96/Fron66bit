import React from "react";

const BriefInformation = (props) => {
    return <div>
        <h3 className={"mb-4"}>Менеджер: {props.fullName}</h3>
        <p>Общее просроченное время: <span className={"red"}>{props.overdueTime} ч</span></p>
        <p>Количество проектов: <span className={"blue"}>{props.projectsCount} шт</span></p>
    </div>
};

export default BriefInformation;