import React from "react";
import PieCharts from "../Charts/PieCharts";

const Projects = (props) => {
        return <div>
            <p>Всего проектов: {props.data.length} шт</p>
            <PieCharts {...props}/>
        </div>
    };

export default Projects;