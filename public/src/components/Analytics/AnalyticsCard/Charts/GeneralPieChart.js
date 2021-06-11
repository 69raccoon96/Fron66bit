import React from "react";
import Chart from "react-apexcharts";
import {GeneralPieChartState} from "./OptionsCharts";

const GeneralPieChart = (props) => {
    const state = GeneralPieChartState(props.labels, props.series)
    return <Chart className={"d-inline-block"} options={state.options} series={state.options.series} type="pie"
                  width={420}
                  height={280}/>;
};
export default GeneralPieChart;