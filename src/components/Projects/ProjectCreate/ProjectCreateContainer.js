import React from 'react';
import {connect} from "react-redux";

import ProjectCreate from "./ProjectCreate";
import {getCustomers, getFilterProjects, getManagers} from "../../../redux/filter-reducer";
import {getProjectCard, postProject} from "../../../redux/projects-reducer";

class ProjectCreateContainer extends React.Component {
    componentDidMount() {
        if (!this.props.customers)
            this.props.getCustomers();
        if (!this.props.projects)
            this.props.getFilterProjects();
    }

    render() {
        return <ProjectCreate customers={this.props.customers}
                              projects={this.props.projects}
                              postProject={this.props.postProject}
                              projectCard={this.props.projectCard}
                              getProjectCard={this.props.getProjectCard}/>;
    }
}

let mapStateToProps = (state) => ({
    projects: state.filter.projects,
    customers: state.filter.customers,
    projectCard: state.projectsPage.projectCard
});

export default connect(mapStateToProps,
    {getManagers, getCustomers,getFilterProjects, getProjectCard, postProject})(ProjectCreateContainer);