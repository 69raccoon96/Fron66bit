import React, {memo} from 'react';
import s from './Filter.module.css';
import FormFilter from "./FormFilter";

const Filter = (props) => {
    return <div className={s.wrapper}>
        <h2>Фильтр</h2>
        <FormFilter managers={props.managers} customers={props.customers} projects={props.projects} onSubmit={props.get}/>
    </div>
};




export default memo(Filter);