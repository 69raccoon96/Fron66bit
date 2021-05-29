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
    return <Form onSubmit={props.onSubmit}
                 render={({handleSubmit}) => (
                     <form onSubmit={handleSubmit} className={s.form}>
                         <div>
                             <label>Проекты</label>
                             <div>
                                 <Field name="projects" component="select" type="checkbox" multiple>
                                     <optgroup label="Проекты">
                                         {projects}
                                     </optgroup>
                                 </Field>
                             </div>
                         </div>
                         <div>
                             <label>Менеджеры</label>
                             <div>
                                 <Field name="managers" component="select" type="checkbox" multiple>
                                     <optgroup label="Менеджеры">
                                         {managers}
                                     </optgroup>
                                 </Field>
                             </div>
                         </div>
                         <div>
                             <label>Заказчики</label>
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
                                 <Field name="type" component="input" type="radio" value={"active"}/>-Активные
                             </label>
                             <br/>
                             <label>
                                 <Field name="type" component="input" type="radio" value={"inactive"}/>-Завершенные
                             </label>
                         </div>

                         <div className={s.time}>
                             <div>Временные рамки:</div>
                             <label>
                                 <div>От:</div>
                                 <Field name="dateStart" component="input" type="date"/>
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