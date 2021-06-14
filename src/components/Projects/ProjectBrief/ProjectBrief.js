import React from 'react';
import s from './ProjectBrief.module.css';
import {NavLink} from "react-router-dom";

const ProjectBrief = (props) => {
    let basicInformation = props.projectsBrief.map(p => <BasicInformation {...p} key={p.id}/>);
    return <div>
        <div className={s.header}>
            Результаты:
        </div>
        {basicInformation}
    </div>
};

const BasicInformation = (props) => {
    console.log(props);
    let timeStart = props.dateStart.slice(0, 10).split("-");
    let timeEnd = props.dateEnd.slice(0, 10).split("-");
    return <div className={s.basicInformationBody}>
        <h2 className={s.title}>{props.title}</h2>
        <p className={s.manager + " mb-1"}>Ответственный менеджер: <span className={"green"}>
            {`${props.manager.firstName || "Фамилия"} ${props.manager.lastName || "имя"}`}</span></p>
        <p className={s.customer}>Заказчик: <span
            className={"blue"}>{`${props.customer?.firstName || "Фамилия"} ${props.customer?.lastName || "имя"}`}</span>
        </p>
        <ul className={s.list}>
            <li>
                Просроченное время: <span className={s.red}>{props.overdueTime} ч.</span>
            </li>
            <li>Количество просроченных задач: <span className="red">{props.overdueTasks} шт.</span></li>

            <li>Срок
                реализации: {`${timeStart[2]}/${timeStart[1]}/${timeStart[0]}—${timeEnd[2]}/${timeEnd[1]}/${timeEnd[0]}`} </li>
        </ul>
        <NavLink className={s.link} to={'/project/card/' + props.id}>
            Перейти
        </NavLink>
    </div>
}


export default ProjectBrief;