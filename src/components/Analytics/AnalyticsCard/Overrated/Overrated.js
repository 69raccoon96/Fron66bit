import React from "react";
import TableR from "../Table/Table";
import GeneralPieChart from "../Charts/GeneralPieChart";

const Overrated = React.memo((props) => {
    return <div>
        <GeneralPieChart labels={props.data.map(elem => elem.name)} series={props.data.map(elem => elem.timeSpent)}/>
        <div className={"d-inline-block p-3 align-top"}>
            <p>Просроченное время: <span className={"green"}>{props.timeSpent - props.timePlaned} ч</span></p>
            <p>Фактическое время: {props.timeSpent} ч</p>
            <p>Планируемое время: {props.timePlaned} ч</p>
        </div>
        <TableR type={props.type} data={props.data}/>
    </div>
});

export default Overrated;
