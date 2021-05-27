import React from "react";
import Chart from "react-apexcharts";

const BarChart = (props) => {
    console.log(props);
    const stateAll = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: props.data.map(elem => elem.name),
            },
            yaxis:{
                labels: {
                    formatter: (val) => {
                        return val + "%";
                    }
                }
            },
            dataLabels: {
                enabled: true,
                formatter: (val) => {
                    return val + "%";
                },
            }
        },
        series: [
            {
                name: "series-1",
                data: props.data.map(elem => (elem.timeSpent - elem.timePlaned / elem.timePlaned) )
            }
        ],

    };
    return <>
        <Chart
            options={stateAll.options}
            series={stateAll.series}
            type="bar"
            width="100%"
            height={400}
        />
    </>
};

export default BarChart;