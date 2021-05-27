import React from "react";
import TableR from "../Table/Table";
import PieCharts from "../Charts/PieCharts";

const Overrated = (props) => {

    const overratedTasks = props.data.map((t, index) =>
        <div key={index}>
            {t.name} {t.timeSpent} {t.timePlaned}
        </div>);
    return <div>
        Общ{props.factTime}
        Общ{props.planedTime}
        {overratedTasks}
        <PieCharts {...props}/>
        <TableR type={props.type} data={props.data}/>
    </div>
};

export default Overrated;