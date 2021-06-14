import React from 'react';
import s from "./ProjectCreate.module.css";
import {Form, Field} from "react-final-form";

const ProjectCreate = (props) => {
    let customers = null;
    let projects = null;

    if (props.customers) {
        customers = props.customers.map(c => {
            return (<option key={c.id} value={c.id}>{`${c.firstName} ${c.lastName}`}</option>);
        });
    }

    if (props.projects) {
        projects = props.projects.map(p => {
            return (<option key={p.id} value={p.id}>{p.title}</option>)
        });
    }

    return <div className={s.wrapper}>
        <h2>Создание проекта</h2>
        <FormProjectCreate post={props.postProject}
                           id={props.projectCard ? props.projectCard.id : null}
                           customer={props.projectCard && props.projectCard.customer? props.projectCard.customer : null}
                           customers={customers} projects={projects}
                           getProjectCard={props.getProjectCard} dateStart={props.projectCard.dateStart}
                           dateEnd={props.projectCard.dateEnd}/>
    </div>
};

const FormProjectCreate = (props) => {
    let timeStart = props.dateStart?.slice(0, 10).split("-");
    let timeEnd = props.dateEnd?.slice(0, 10).split("-");
    return <Form onSubmit={(values => props.post(values))}
                 render={({handleSubmit}) => (
                     <form onSubmit={handleSubmit} className={s.form}>
                         <div className={s.name}>
                             <label>
                                 <Field name="projectName" component="select" placeholder="Название проекта" onChange={(e) => {
                                     props.getProjectCard(e.target.value);
                                     return true;
                                 }} required>
                                     {select =>
                                        <select {...select} value={props.id}>
                                            <option>Выберите проект</option>
                                            {props.projects}
                                        </select>
                                     }
                                 </Field>
                             </label>
                         </div>
                         <div className={s.cust}>
                             <label className={s.label}>
                                 Заказчик {props.customer ? ` - ${props.customer.firstName} ${props.customer.lastName}` : null}</label>
                             <div>
                                 <Field component="select" name="customers" required>
                                     {select =>
                                         <select {...select} defaultValue={props.customer?.id}>
                                             {props.customers}
                                         </select>
                                     }
                                 </Field>
                             </div>
                         </div>
                         <div className={s.time}>
                             <div className={s.label}>
                                 <label>Срок реализации:{" "}
                                     {"с "} {props.dateStart ? `${timeStart[2]}/${timeStart[1]}/${timeStart[2]}` : '"неизвестно"'}
                                     {" по "}{props.dateEnd ? `${timeEnd[2]}/${timeEnd[1]}/${timeEnd[2]}` : '"неизвестно"'}
                             </label>
                             </div>
                             <Field name="DateStart">
                                 {input => (
                                     <input type="date" {...input}
                                            defaultValue={props.dateStart ? props.dateStart.slice(0, 10) : null}
                                            required/>
                                 )}
                             </Field>
                             {" "}-{" "}
                             <Field name="DateEnd">
                                 {input => (
                                     <input type="date" {...input}
                                            defaultValue={props.dateEnd ? props.dateEnd.slice(0, 10) : null}
                                            required/>
                                 )}
                             </Field>
                         </div>
                         <button className={s.button} type="submit">Изменить</button>
                     </form>
                 )}
    />
}

export default ProjectCreate;