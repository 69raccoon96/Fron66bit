import React from 'react';
import {Form, Field} from "react-final-form";
import s from './Filter.module.css';

const Filter = (props) => {
    let managers = null;
    let customers = null;
    if (props.managers) {
        managers = props.managers.map(m => (<option key={m.id} value={m.id}>{m.firstName} {m.lastName}</option>));
    }

    if (props.customers) {
        customers = props.customers.map(c => (
            <option key={c.id} value={c.id}>{c.firstName} {c.lastName}</option>));
    }

    let onSubmit = (formObj) => {
        props.get(formObj)
    };
    return <div className={s.wrapper}>
        <h2>Фильтр</h2>
        <FormFilter managers={managers} customers={customers} onSubmit={onSubmit}/>
    </div>
};

const FormFilter = (props) => {
    return <Form onSubmit={props.onSubmit}
                 render={({handleSubmit}) => (
                     <form onSubmit={handleSubmit} className={s.form}>
                         <div>
                             <label>
                                 <Field
                                     name="projectName"
                                     component="input"
                                     type="textarea"
                                     placeholder="Выбрать проект"
                                 />
                             </label>
                         </div>
                         <div>
                             <label>Менеджеры</label>
                             <div>
                                 <Field
                                     name="managers"
                                     component="select"
                                     type="checkbox"
                                     multiple
                                 >
                                     {props.managers}
                                 </Field>
                             </div>
                         </div>
                         <div >
                             <label>Заказчики</label>
                             <div>
                                 <Field
                                     name="customers"
                                     component="select"
                                     type="checkbox"
                                     multiple
                                 >
                                     {props.customers}
                                 </Field>
                             </div>
                         </div>

                         <div className={s.type}>
                             <label>
                                 <Field
                                     name="type"
                                     component="input"
                                     type="radio"
                                     value={"active"}
                                     checked
                                 />-Активные
                             </label>
                             <br />
                             <label>
                                 <Field
                                     name="type"
                                     component="input"
                                     type="radio"
                                     value={"inactive"}
                                 />-Завершенные
                             </label>
                         </div>
                         <div className={s.time}>
                             <label>Временные рамки:{" "}<br/>
                                 От: <Field
                                     name="DateStart"
                                     component="input"
                                     type="date"
                                 />
                                 До: <Field
                                     name="DateEnd"
                                     component="input"
                                     type="date"
                                 />
                             </label>
                         </div>

                         <button className={s.button} type="submit">Сформировать</button>
                     </form>
                 )}
    />
}

//TODO ПЕРЕДЕЛАТЬ ФОРМУ ВРЕМЕНИ

export default Filter;