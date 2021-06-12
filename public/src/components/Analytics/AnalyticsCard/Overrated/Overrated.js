import React, {memo} from "react";
import TableR from "../Table/Table";
import GeneralPieChart from "../Charts/GeneralPieChart";

const Overrated = (props) => {
    return <div>
        Общ {props.timeSpent}
        Общ {props.timePlaned}
        <GeneralPieChart labels={props.data.map(elem => elem.name)} series={props.data.map(elem => elem.timeSpent)}/>
        <TableR type={props.type} data={props.data}/>
    </div>
};

export default memo(Overrated);