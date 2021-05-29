import React from 'react';
import Projects from "./Projects";
import {connect} from "react-redux";
import {getProjectsBrief} from "../../redux/projects-reducer";
import {getCustomers, getFilterProjects, getManagers} from "../../redux/filter-reducer";

class ProjectsContainer extends React.Component {
    componentDidMount() {
        this.props.getManagers();
        this.props.getCustomers();
        this.props.getFilterProjects();
    }

    render() {
        return <Projects {...this.props}/>;}
}

let mapStateToProps = (state) => ({
    managers: state.filter.managers,
    customers: state.filter.customers,
    projects: state.filter.projects,
    projectsBrief: state.projectsPage.projectsBrief
});

export default connect(mapStateToProps, {getManagers, getCustomers, getProjectsBrief, getFilterProjects})(ProjectsContainer);