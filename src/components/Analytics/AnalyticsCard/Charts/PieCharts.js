import React from "react";
import s from "../AnalyticsCard.module.css";
import Chart from "react-apexcharts";
import splitOverdue from "../../../../functions/SplitOverdue";

const PieCharts = (props) => {
    let projects = splitOverdue(props.data);
    console.log(props);
    const stateAll = {
        options: {
            labels: projects.all.labels,
            series: projects.all.series,
            colors: ['#170132', '#280354', '#1103c5', '#6db7ee', '#b2c7ed'],
        }
    };
    const stateSlightly = {
        options: {
            labels: projects.slightlyOverdue.labels,
            series: projects.slightlyOverdue.series,
            colors: ["#f1c204"],
            legend: {
                show: false
            }
        }
    };
    const stateMedium = {
        options: {
            labels: projects.mediumOverdue.labels,
            series: projects.mediumOverdue.series,
            colors: ["#db5705"],
            legend: {
                show: false
            }
        }
    };
    const stateHighly = {
        options: {
            labels: projects.highlyOverdue.labels,
            series: projects.highlyOverdue.series,
            colors: ["#9a0404"],
            legend: {
                show: false
            }
        }
    };

    return <>
        <Chart className={"d-inline-block"} options={stateAll.options} series={stateAll.options.series} type="pie" width={500}
               height={320}/>
        <div className={"d-inline-block p-3"}>
            <p>Просроченное время: <span className={"red"}>{props.factTime - props.planedTime} ч</span></p>
            <p>Фактическое время: {props.factTime} ч</p>
            <p>Планируемое время: {props.planedTime} ч</p>
        </div>
        <div className={s.flex}>
            Менее 50%
            <Chart options={stateSlightly.options} series={stateSlightly.options.series} type="pie" width={200} height={200}/>
            50%-100%
            <Chart options={stateMedium.options} series={stateMedium.options.series} type="pie" width={200} height={200}/>
            100%
            <Chart options={stateHighly.options} series={stateHighly.options.series} type="pie" width={200} height={200}/>
        </div>
    </>
};

export default PieCharts;