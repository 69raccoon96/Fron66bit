import React from 'react';
import Analytics from "./Analytics";
import {connect} from "react-redux";
import {getCustomers, getManagers} from "../../redux/filter-reducer";
import {getGeneral} from "../../redux/analytics-reducer";

class AnalyticsContainer extends React.Component {
    componentDidMount() {
        this.props.getManagers();
        this.props.getCustomers();
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
});

export default connect(mapStateToProps, {getManagers, getCustomers, getGeneral})(AnalyticsContainer);