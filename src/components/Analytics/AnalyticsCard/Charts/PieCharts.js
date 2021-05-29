import React from "react";
import s from "../AnalyticsCard.module.css";
import Chart from "react-apexcharts";
import splitOverdue from "../../../../functions/SplitOverdue";
import GeneralPieChart from "./GeneralPieChart";
import {SimplePieChartState} from "./OptionsCharts";

const PieCharts = (props) => {
    let projects = splitOverdue(props.data);
    const sizeCharts = 170;
    const stateSlightly = SimplePieChartState(projects.slightlyOverdue.labels, projects.slightlyOverdue.series, ["#f1c204"]);
    const stateMedium = SimplePieChartState(projects.mediumOverdue.labels, projects.mediumOverdue.series, ["#db5705"]);
    const stateHighly = SimplePieChartState(projects.highlyOverdue.labels, projects.highlyOverdue.series, ["#9a0404"]);

    return <>
        <GeneralPieChart labels={projects.all.labels} series={projects.all.series}/>
        <div className={"d-inline-block p-3 align-top"}>
            <p>Просроченное время: <span className={"red"}>{props.timeSpent - props.timePlaned} ч</span></p>
            <p>Фактическое время: {props.timeSpent} ч</p>
            <p>Планируемое время: {props.timePlaned} ч</p>
        </div>
        <div className={s.flex}>
            Менее 50%
            <Chart options={stateSlightly.options} series={stateSlightly.options.series} type="pie" width={sizeCharts}
                   height={sizeCharts}/>
            50%-100%
            <Chart options={stateMedium.options} series={stateMedium.options.series} type="pie" width={sizeCharts}
                   height={sizeCharts}/>
            100%
            <Chart options={stateHighly.options} series={stateHighly.options.series} type="pie" width={sizeCharts}
                   height={sizeCharts}/>
        </div>
    </>
};

export default PieCharts;