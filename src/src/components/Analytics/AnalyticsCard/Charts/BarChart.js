import React from "react";
import Chart from "react-apexcharts";
import {BarChartState} from "./OptionsCharts";

const BarChart = (props) => {
    const stateAll = BarChartState(props.data.map(elem => elem.name), {
        name: "Аналитика",
        data: props.data.map(elem => (elem.timeSpent - elem.timePlaned / elem.timePlaned))
    });

    return <>
        <Chart
            options={stateAll.options}
            series={stateAll.series}
            type="bar"
            min-width="40%"
            max-width="100%"
            height={320}
        />
    </>
};

export default BarChart;