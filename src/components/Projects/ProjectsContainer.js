import React from 'react';
import Projects from "./Projects";
import {connect} from "react-redux";
import {getProjectsBrief} from "../../redux/projects-reducer";
import {getCustomers, getManagers} from "../../redux/filter-reducer";

class ProjectsContainer extends React.Component {
    componentDidMount() {
        this.props.getManagers();
        this.props.getCustomers();
    }

    render() {
        return <Projects {...this.props}/>;}
}

let mapStateToProps = (state) => ({
    managers: state.filter.managers,
    customers: state.filter.customers,
    projectsBrief: state.projectsPage.projectsBrief
});

export default connect(mapStateToProps, {getManagers, getCustomers, getProjectsBrief})(ProjectsContainer);