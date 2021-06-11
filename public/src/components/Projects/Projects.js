import React from 'react';
import s from './Projects.module.css';
import Filter from "../Filter/Filter";
import ProjectBrief from "./ProjectBrief/ProjectBrief";
import {NavLink} from "react-router-dom";

const Projects = (props) => {
    return <div className={s.body}>
        <Filter managers={props.managers} customers={props.customers} projects={props.projects}
                get={props.getProjectsBrief}/>
        <div className={s.projectsCreate}>
            <NavLink to={"/projects/create"}>
                Добавить проект
            </NavLink>
        </div>
        {props.projectsBrief.length > 0 ? <ProjectBrief projectsBrief={props.projectsBrief}/> : undefined}
    </div>
};

export default Projects;