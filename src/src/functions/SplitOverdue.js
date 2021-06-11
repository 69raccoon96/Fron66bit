const splitOverdue = (data) => {
    let result = {
        all: {
            labels: [],
            series: []
        },
        slightlyOverdue: {
            labels: [],
            series: []
        },
        mediumOverdue: {
            labels: [],
            series: []
        },
        highlyOverdue: {
            labels: [],
            series: []
        }
    };

    data.forEach(elem => {
        result.all.labels.push(elem.name);
        result.all.series.push(elem.timeSpent);
        if (elem.timeSpent > elem.timePlaned) {
            let overdue = (elem.timeSpent - elem.timePlaned) / elem.timePlaned;
            if (overdue < 0.5) {
                result.slightlyOverdue.labels.push(elem.name);
                result.slightlyOverdue.series.push(elem.timeSpent);
            } else if (overdue >= 0.5 && overdue < 1) {
                result.mediumOverdue.labels.push(elem.name);
                result.mediumOverdue.series.push(elem.timeSpent);
            } else {
                result.highlyOverdue.labels.push(elem.name);
                result.highlyOverdue.series.push(elem.timeSpent);
            }
        }
    });

    return result;
}

export default splitOverdue;