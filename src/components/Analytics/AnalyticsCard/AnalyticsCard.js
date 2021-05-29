import React from 'react';
import s from './AnalyticsCard.module.css';
import BriefInformation from "./BriefInformation/BriefInformation";
import Overdue from "./Overdue/Overdue";
import Projects from "./Projects/Projects";
import Overrated from "./Overrated/Overrated";

const Block = (props) => {
    return <div>
        <div className={"border-bottom"}>
            <h2 className={"d-inline-block mr-2"}>{props.title}</h2>
            <button className="d-inline-block dropdown-toggle" type="button" data-toggle="collapse"
                    data-target={`#collapse${props.dataAttribute}`}/>
        </div>
        <div className="collapse" id={`collapse${props.dataAttribute}`}>
            <div className="p-3">
                {props.content}
            </div>
        </div>
    </div>;
};

const AnalyticsCard = (props) => {
    if (!props.overdueTasks.data || !props.overdueModules.data || !props.projects.data || !props.overratedTasks.data || !props.overratedModules.data)
        return <>Чел ты, грузится</>
    const overdue = props.typeOverdue === "modules" ?
        <><h2>Модуль</h2>
            <Overdue type={"Модуль"} data={props.overdueModules.data} timePlaned={props.overdueModules.timePlaned}
                     timeSpent={props.overdueModules.timeSpent}/></>
        : <><h2>Задачи</h2>
            <Overdue type={"Задача"} data={props.overdueTasks.data} timePlaned={props.overdueTasks.timePlaned}
                     timeSpent={props.overdueTasks.timeSpent}/></>;
    const overrated = props.typeOverrated === "modules" ? <><h2>Модули</h2>
            <Overrated type={"Модуль"} data={props.overratedModules.data} timePlaned={props.overratedModules.timePlaned}
                       timeSpent={props.overratedModules.timeSpent}/></>
        : <><h2>Задачи</h2>
            <Overrated type={"Задача"} data={props.overratedTasks.data} timePlaned={props.overratedTasks.timePlaned}
                       timeSpent={props.overratedTasks.timeSpent}/></>;

    return <div className={s.wrapper}>
        <Block title={"Краткая информация"} content={<BriefInformation brief={props.brief}/>} dataAttribute={"Brief"}/>
        <Block title={"Просроченные"} content={<>
            <button className={"mb-3"} onClick={props.changeTypeOverdue}>
                {props.typeOverdue === "modules" ? "Сменить на задачи" : "Сменить на модули"}
            </button>
            {overdue}</>} dataAttribute={"Overdue"}
        />
        <Block title={"Проекты"} content={<Projects data={props.projects.data} planedTime={props.projects.planedTime}
                                                    factTime={props.projects.factTime}/>} dataAttribute={"Projects"}/>
        <Block title={"Переоцененные"} content={<>
            <button className={"mb-3"} onClick={props.changeTypeOverrated}>
                {props.typeOverrated === "modules" ? "Сменить на задачи" : "Сменить на модули"}
            </button>
            {overrated}</>} dataAttribute={"Overrated"}
        />
    </div>
};

export default AnalyticsCard;