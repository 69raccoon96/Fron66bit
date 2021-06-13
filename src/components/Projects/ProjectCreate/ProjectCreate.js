import React from 'react';
import s from "./ProjectCreate.module.css";
import {Form, Field} from "react-final-form";

const ProjectCreate = (props) => {
    let managers = null;
    let customers = null;
    if (props.managers.length > 0) {
        managers = props.managers.map(m => (
            <option value={m.id}>{`${m.firstName} ${m.lastName}`}</option>));
    }

    if (props.customers.length > 0) {
        customers = props.customers.map(c => (
            <option value={c.id}>{`${c.firstName} ${c.lastName}`}</option>));
    }

    return <div className={s.wrapper}>
        <h2>Создание проекта</h2>
        <FormProjectCreate post={props.postProject} managers={managers} customers={customers}/>
    </div>
};

const FormProjectCreate = (props) => {
    return <Form onSubmit={(values => props.post(values))}
                 render={({handleSubmit}) => (
                     <form onSubmit={handleSubmit} className={s.form}>
                         <div className={s.name}>
                             <label >
                                 <Field
                                     name="projectName"
                                     component="input"
                                     type="textarea"
                                     placeholder="Название проекта"
                                     required
                                 />
                             </label>
                         </div>
                         <div className={s.cust}>
                             <label className={s.label}>Заказчик</label>
                             <div>
                                 <Field component="select" name="customers" required>
                                     {props.customers}
                                 </Field>
                             </div>
                         </div>
                         <div className={s.manager}>
                             <label className={s.label}>Менеджер</label>
                             <div>
                                 <Field component="select" name="managers" required>
                                     {props.managers}
                                 </Field>
                             </div>
                         </div>
                         <div className={s.code}>
                             <label>
                                 <Field
                                     name="codeProject"
                                     component="input"
                                     type="textarea"
                                     placeholder="Код проекта"
                                     required
                                 />
                             </label>
                         </div>
                         <div className={s.time}>
                             <div className={s.label}><label>Срок реализации:{" "}</label></div>
                             <Field
                                 name="DateStart"
                                 component="input"
                                 type="date"
                                 required
                             />
                             {" "}-{" "}
                             <Field
                                 name="DateEnd"
                                 component="input"
                                 type="date"
                                 required
                             />

                         </div>
                         <button className={s.button} type="submit">Добавить</button>
                     </form>
                 )}
    />
}

export default ProjectCreate;