import React from 'react';
import {connect} from "react-redux";

import ProjectCreate from "./ProjectCreate";
import {getCustomers, getManagers} from "../../../redux/filter-reducer";

class ProjectCreateContainer extends React.Component {
    componentDidMount() {
        if (this.props.managers.length === 0)
            this.props.getManagers();
        if (this.props.customers.length === 0)
            this.props.getCustomers();
    }

    render() {
        return <ProjectCreate managers={this.props.managers} customers={this.props.customers}/>;
    }
}

let mapStateToProps = (state) => ({
    managers: state.filter.managers,
    customers: state.filter.customers,
});

export default connect(mapStateToProps, {getManagers, getCustomers})(ProjectCreateContainer);