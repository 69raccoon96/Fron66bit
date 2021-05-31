import React from "react";
import PieCharts from "../Charts/PieCharts";

const Projects = (props) => {
        return <div>
            <h3>Всего проектов: {props.data.length} шт</h3>
            <PieCharts {...props}/>
        </div>
    };

export default Projects;