import React from 'react';
import Projects from "./Projects";
import {connect} from "react-redux";
import {getProjectsBrief} from "../../redux/projects-reducer";
import {getCustomers, getFilterProjects, getManagers} from "../../redux/filter-reducer";

class ProjectsContainer extends React.Component {
    componentDidMount() {
        if(this.props.userType !== "Manager" && !this.props.managers)
            this.props.getManagers();
        if (!this.props.customers)
            this.props.getCustomers();
        if (!this.props.projects)
            this.props.getFilterProjects();
    }

    render() {
        if ((this.props.userType !== "Manager"&& !this.props.managers) || !this.props.customers || !this.props.projects)
            return <>Загрузка...</>
        return <Projects {...this.props}/>;}
}

let mapStateToProps = (state) => ({
    managers: state.filter.managers,
    customers: state.filter.customers,
    projects: state.filter.projects,
    projectsBrief: state.projectsPage.projectsBrief,
    userType: state.auth.userType
});

export default connect(mapStateToProps, {getManagers, getCustomers, getProjectsBrief, getFilterProjects})(ProjectsContainer);