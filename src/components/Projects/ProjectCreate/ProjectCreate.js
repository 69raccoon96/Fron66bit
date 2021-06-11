import React from 'react';
import s from "./ProjectCreate.module.css";
import {Form, Field} from "react-final-form";

const ProjectCreate = React.memo((props) => {
    let managers = null;
    let customers = null;
    if (props.managers.length > 0) {
        managers = props.managers.map(m => (
            <div key={m.id}>
                <label>
                    <Field
                        component="input"
                        name="managers"
                        type="radio"
                        required
                        value={`${m.id}`}
                    />{' '}
                    {m.firstName} {m.lastName}
                </label>
            </div>));
    }

    if (props.customers.length > 0) {
        customers = props.customers.map(c => (
            <div key={c.id}>
                <label>
                    <Field
                        component="input"
                        name="customers"
                        type="radio"
                        required
                        value={`${c.id}`}
                    />{' '}
                    {c.firstName} {c.lastName}
                </label>
            </div>));
    }

    return <div className={s.wrapper}>
        <h1 className={s.title}>Создание проекта</h1>
        <FormProjectCreate managers={managers} customers={customers}/>
    </div>
});

const FormProjectCreate = (props) => {
    return <Form onSubmit={(values => console.log(values))}
                 render={({handleSubmit}) => (
                     <form onSubmit={handleSubmit} className={s.form}>
                         <div>
                             <label>
                                 <Field
                                     name="projectName"
                                     component="input"
                                     type="textarea"
                                     placeholder="Название проекта"
                                     required
                                 />
                             </label>
                         </div>
                         <div>
                             <label>Заказчик</label>
                             <div>
                                 {props.customers}
                             </div>
                         </div>
                         <div>
                             <label>Менеджер</label>
                             <div>
                                 {props.managers}
                             </div>
                         </div>
                         <div>
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
                         <div>
                             <label>Срок реализации:{" "}<br/>
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
                             </label>
                         </div>
                         <button type="submit">Добавить</button>
                     </form>
                 )}
    />
}

export default ProjectCreate;