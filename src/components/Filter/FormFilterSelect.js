import React from 'react';
import {Form, Field} from "react-final-form";
import s from './Filter.module.css';
import Select from 'react-select';

const FormFilterSelect = (props) => {
    let projects = null;
    let managers = null;
    let customers = null;

    if (props.projects && props.managers && props.customers) {
        projects = props.projects.map(p => ({value: p.id, label: p.title}));
        managers = props.managers.map(m => ({value: m.id, label: `${m.firstName} ${m.lastName}`}));
        customers = props.customers.map(c => ({value: c.id, label: `${c.firstName} ${c.lastName}`}));
    }

    return <Form onSubmit={props.onSubmit}
                 render={({handleSubmit}) => (
                     <form onSubmit={handleSubmit} className={s.form}>
                         <div>
                             <div>
                                 <Field name="projectsNames">
                                     {({input}) => {
                                         return <Select className={s.select} name={input.name} options={projects} isMulti/>
                                     }}
                                 </Field>
                             </div>
                         </div>
                         {props.managers ? <div>
                                 <div>
                                     <Field name="managers">
                                         {({input}) => {
                                             return <Select className={s.select} name={input.name} options={managers} isMulti/>
                                         }}
                                     </Field>
                                 </div>
                             </div>
                             : null}
                         <div>
                             <div>

                                 <Field name="customers">
                                     {({input}) => {
                                         return <Select className={s.select} name={input.name} options={customers} isMulti/>
                                     }}
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


export default FormFilterSelect;
