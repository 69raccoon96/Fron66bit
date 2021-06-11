import React from "react";
import TableR from "../Table/Table";
import PieCharts from "../Charts/PieCharts";
import BarChart from "../Charts/BarChart";

const Overdue = (props) => {
    return <div>
        <PieCharts {...props}/>
        <BarChart data={props.data}/>
        <TableR type={props.type} data={props.data}/>
    </div>
};

export default Overdue;