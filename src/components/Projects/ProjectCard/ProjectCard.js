import React from 'react';
import s from './ProjectCard.module.css';

function taskUI(modules) {
    return modules.map((m, i) => (
            <li key={i}><span className={s.module}> Модуль {`${i + 1}`}: {modules.title || "Название"}</span>{" "}
                <button className={"dropdown-toggle"} data-toggle="collapse" data-target={`#collapseTasks${i}`}/>
                <ul className="collapse" id={`collapseTasks${i}`}>
                    {m.tasks.map((t, j) => <li key={j}>Задача {`${j + 1}`}: {t.name} {t.isDone ? "Сделана" : "Не сделана"}</li>)}
                </ul>
            </li>
        )
    );
}


const ProjectCard = (props) => {
    if (!props.manager || !props.customer)
        return <div>
            Чел ты... Грузится, подожди
        </div>;

    let modules = undefined;
    if (props.modules) {
        modules = taskUI(props.modules);
    }

    let timeStart = props.dateStart.slice(0, 10).split("-");
    let timeEnd = props.dateEnd.slice(0, 10).split("-");

    return <div className={s.wrapper}>
        <h1 className={s.title}>
            {props.title}
        </h1>
        <p className={s.description}>
            {props.description || "А А А А А А А А А А А А А А А А А А А А А А А А А А А А АА А А А А А ВЕРСТКА АЫЫЫЫЫЫЫЫ"}
        </p>
        <p className={s.managers}>
            Менеджер: {`${props.manager.firstName} ${props.manager.lastName}`}
        </p>
        <ul className={s.modules}>
            {modules}
        </ul>
        <div className={s.customer}>
            Заказчик: <span>{props.customer.firstName} {props.customer.lastName}</span>
        </div>
        <div className={s.time}>
            Срок
            реализации: {`${timeStart[2]}/${timeStart[1]}/${timeStart[0]}—${timeEnd[2]}/${timeEnd[1]}/${timeEnd[0]}`}
        </div>

    </div>
};

export default ProjectCard;