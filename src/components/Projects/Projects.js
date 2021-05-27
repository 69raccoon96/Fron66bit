import React from 'react';
import s from './Projects.module.css';
import Filter from "../Filter/Filter";
import ProjectBrief from "./ProjectBrief/ProjectBrief";
import {NavLink} from "react-router-dom";

const Projects = (props) => {
    return <div className={s.body}>
        Body:Projects
        <Filter managers={props.managers} customers={props.customers} get={props.getProjectsBrief}/>
        <div className={s.projectsCreate}>
            <NavLink to={"/project/create"}>
                Добавить проект
            </NavLink>
        </div>
        {props.projectsBrief.length > 0 ? <ProjectBrief projectsBrief={props.projectsBrief}/> : undefined}
    </div>
};

export default Projects;