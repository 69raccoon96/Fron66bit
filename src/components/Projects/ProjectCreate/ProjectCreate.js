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
        <FormProjectCreate postProject={props.postProject}
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
    return <Form onSubmit={(values => {
        console.log(values);
        props.postProject(values)
    })}
                 render={({handleSubmit}) => (
                     <form onSubmit={handleSubmit} className={s.form}>
                         <div className={s.name}>
                             <label>
                                 <Field name="projectId" required
                                 render={(p) => {
                                        //console.log(p);
                                        //props.getProjectCard(p.input.value);
                                        return <select {...p.input}>
                                            <option>Выберите проект</option>
                                            {props.projects}
                                        </select>
                                     }} />
                                 {/*<Field name="projectId"  onChange={(e) => {props.getProjectCard(e.target.value);}} required>*/}
                                 {/*    {p =>{*/}
                                 {/*        console.log(p);*/}
                                 {/*        return <select {...p.input} onChange={(e) => p.input.onChange(e)}>*/}
                                 {/*            <option>Выберите проект</option>*/}
                                 {/*            {props.projects}*/}
                                 {/*        </select>*/}
                                 {/*    }}*/}
                                 {/*</Field>*/}
                             </label>
                         </div>
                         <div className={s.cust}>
                             <label className={s.label}>
                                 Заказчик {props.customer ? ` - ${props.customer.firstName} ${props.customer.lastName}` : null}</label>
                             <div>
                                 <Field name="customerId"  required>
                                     {p =>
                                         <select {...p.input} >
                                             <option>Выберите менеджера</option>
                                             {props.customers}
                                         </select>
                                     }
                                 </Field>
                             </div>
                         </div>
                         <div className={s.time}>
                             <div className={s.label}>
                                 <label>Срок реализации:{" "}
                                     {/*{"с "} {props.dateStart ? `${timeStart[2]}/${timeStart[1]}/${timeStart[2]}` : '"неизвестно"'}*/}
                                     {/*{" по "}{props.dateEnd ? `${timeEnd[2]}/${timeEnd[1]}/${timeEnd[2]}` : '"неизвестно"'}*/}
                             </label>
                             </div>
                             <Field name="dateStart" defaultValue={props.dateStart ? props.dateStart.slice(0, 10) : null}>
                                 {p => (
                                     <input type="date" {...p.input} required/>
                                 )}
                             </Field>
                             {" "}-{" "}
                             <Field name="dateEnd" defaultValue={props.dateEnd ? props.dateEnd.slice(0, 10) : null}>
                                 {p => (
                                     <input type="date" {...p.input} required/>
                                 )}
                             </Field>
                         </div>
                         <button className={s.button} type="submit">Изменить</button>
                     </form>
                 )}
    />
}

export default ProjectCreate;