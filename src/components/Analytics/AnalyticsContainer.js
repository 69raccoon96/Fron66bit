import React from 'react';
import Analytics from "./Analytics";
import {connect} from "react-redux";
import {getCustomers, getManagers,getFilterProjects} from "../../redux/filter-reducer";
import {getGeneral} from "../../redux/analytics-reducer";

class AnalyticsContainer extends React.Component {
    componentDidMount() {
        if(this.props.userType !== "Manager")
            this.props.getManagers();
        this.props.getCustomers();
        this.props.getFilterProjects();
    }

    render() {
        return <Analytics {...this.props}/>;
    }
}

let mapStateToProps = (state) => ({
    managers: state.filter.managers,
    customers: state.filter.customers,
    projectsFilter: state.filter.projects,
    managersIds: state.analyticsPage.managersIds,
    projectsIds: state.analyticsPage.projectsIds,
    userType: state.auth.userType
});

export default connect(mapStateToProps, {getManagers, getCustomers, getFilterProjects, getGeneral})(AnalyticsContainer);