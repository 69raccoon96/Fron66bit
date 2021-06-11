import React, {memo} from 'react';
import s from './Filter.module.css';
import FormFilter from "./FormFilter";

const Filter = (props) => {
    let onSubmit = (formObj) => {
        props.get(formObj)
    };
    return <div className={s.wrapper}>
        <h2>Фильтр</h2>
        <FormFilter managers={props.managers} customers={props.customers} projects={props.projects} onSubmit={onSubmit}/>
    </div>
};




export default memo(Filter);