import React from 'react';
import {Form, Field} from "react-final-form";
import s from './Filter.module.css';

const FormFilter = (props) => {
    let projects = null;
    let managers = null;
    let customers = null;
    if (props.projects) {
        projects = props.projects.map(p => (<option key={p.id} value={p.id}>{p.title}</option>));
    }
    if (props.managers) {
        managers = props.managers.map(m => (<option key={m.id} value={m.id}>{m.firstName} {m.lastName}</option>));
    }

    if (props.customers) {
        customers = props.customers.map(c => (
            <option key={c.id} value={c.id}>{c.firstName} {c.lastName}</option>));
    }

    const validation = values => {
        const errors = {}
        if (new Date(values.dateStart) > new Date(values.dateEnd)) {
            errors.dateStart = 'Введите корректное время';
        }

        return errors;
    };

    return <Form onSubmit={props.onSubmit} validate={validation}
                 render={({handleSubmit}) => (
                     <form onSubmit={handleSubmit} className={s.form}>
                         <div>
                             <div>
                                 <Field name="projectsNames" component="select" type="checkbox" multiple>
                                     <optgroup label="Проекты">
                                         {projects}
                                     </optgroup>
                                 </Field>
                             </div>
                         </div>
                         {props.managers.length > 0 ? <div>
                                 <div>
                                     <Field name="managers" component="select" type="checkbox" multiple>
                                         <optgroup label="Менеджеры">
                                             {managers}
                                         </optgroup>
                                     </Field>
                                 </div>
                             </div>
                             : null}
                         <div>
                             <div>
                                 <Field name="customers" component="select" type="checkbox" multiple>
                                     <optgroup label="Заказчики">
                                         {customers}
                                     </optgroup>
                                 </Field>
                             </div>
                         </div>

                         <div className={s.type}>
                             <label>
                                 <Field name="type" component="input" type="radio" value={"active"} required/>-Активные
                             </label>
                             <br/>
                             <label>
                                 <Field name="type" component="input" type="radio" value={"inactive"} required/>-Завершенные
                             </label>
                         </div>

                         <div className={s.time}>
                             <h2>Временные рамки:</h2>
                             <label>
                                 <div>От:</div>
                                 <Field name="dateStart" component="input" type="date">
                                     {({input, meta}) => (<>
                                         <input {...input} />
                                         {meta.error && meta.touched &&
                                         <div className={"red text-center"}>{meta.error}</div>}
                                     </>)}
                                 </Field>
                             </label>
                             <label>
                                 <div>До:</div>
                                 <Field name="dateEnd" component="input" type="date"/>
                             </label>
                         </div>
                         <button className={s.button} type="submit">Сформировать</button>
                     </form>
                 )}
    />
};


export default FormFilter;