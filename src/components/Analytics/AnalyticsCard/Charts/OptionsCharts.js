export const BarChartState = (categories, series) => {
    return {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: categories,
            },
            yaxis: {
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
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top',
                    },
                }
            },
        },
        series: [
            {name: series.name, data: series.data}
        ],
    };
};

export const GeneralPieChartState = (labels, series) => {
    return {
        options: {
            labels: labels,
            series: series,
            colors: ['#170132', '#1f0a6c', '#1006c1',
                '#2a21db', '#3683e1', '#61a1f8',
                '#8db7f5', '#b2c7ed', '#b2c7ed'],
        }
    };
};

export const SimplePieChartState = (labels, series, colors) => {
    return {
        options: {
            labels: labels,
            series: series,
            colors: colors,
            legend: {show: false},
            dataLabels: {enabled: true},
        }
    };
}