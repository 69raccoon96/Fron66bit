import React from 'react';
import s from './AnalyticsCard.module.css';
import BriefInformation from "./BriefInformation/BriefInformation";
import Overdue from "./Overdue/Overdue";
import Projects from "./Projects/Projects";
import Overrated from "./Overrated/Overrated";


const AnalyticsCard = (props) => {
    if (!props.overdueTasks.data || !props.overdueModules.data || !props.projects.data || !props.overratedTasks.data || !props.overratedModules.data)
        return <>Чел ты, грузится</>
    const briefs = props.brief.map((m, index) =>
        <BriefInformation key={index} fullName={m.fullName}
                          overdueTime={m.overdueTime} projectsCount={m.projectsCount}/>);

    return <div className={s.wrapper}>
        <h2 className={"d-inline-block"}>Краткая информация</h2>
        <button className="d-inline-block dropdown-toggle" type="button" data-toggle="collapse"
                data-target="#collapseExample"/>
        <div className="collapse" id="collapseExample">
            <div>{briefs}</div>
        </div>
        <div>
            <h2 className={"d-inline-block"}>Просроченные</h2>
            <button className="d-inline-block dropdown-toggle" type="button" data-toggle="collapse"
                    data-target="#collapseOverdue"/>
            <div className="collapse" id="collapseOverdue">
                <h2>Модуль</h2>
                <Overdue type={"Модуль"} data={props.overdueModules.data} planedTime={props.overdueModules.planedTime}
                         factTime={props.overdueModules.factTime}/>
                <h2>Задачи</h2>
                <Overdue type={"Задача"} data={props.overdueTasks.data} planedTime={props.overdueTasks.planedTime}
                         factTime={props.overdueTasks.factTime}/>
            </div>
        </div>
        <div>
            <h2 className={"d-inline-block"}>Проекты</h2>
            <button className="d-inline-block dropdown-toggle" type="button" data-toggle="collapse"
                    data-target="#collapseProjects"/>
            <div className="collapse" id="collapseProjects">
                <Projects data={props.projects.data} planedTime={props.projects.planedTime}
                          factTime={props.projects.factTime}/>
            </div>
        </div>
        <div>
            <h2 className={"d-inline-block"}>Переоцененные</h2>
            <button className="d-inline-block dropdown-toggle" type="button" data-toggle="collapse"
                    data-target="#collapseOverrated"/>
            <div className="collapse" id="collapseOverrated">
                <h2>Модули</h2>
                <Overrated type={"Модуль"} data={props.overratedModules.data}
                           planedTime={props.overratedModules.planedTime}
                           factTime={props.overratedModules.factTime}/>
                <h2>Задачи</h2>
                <Overrated type={"Задача"} data={props.overratedTasks.data} planedTime={props.overratedTasks.planedTime}
                           factTime={props.overratedTasks.factTime}/>
            </div>
        </div>
    </div>
};

export default AnalyticsCard;