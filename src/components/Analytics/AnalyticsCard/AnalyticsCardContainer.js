import React from 'react';
import AnalyticsCard from "./AnalyticsCard";
import {connect} from "react-redux";
import {compose} from "redux";
import {getBrief, getOverdueModules, getOverdueTasks, getOverratedModules, getOverratedTasks, getProjects}
    from "../../../redux/analytics-reducer";

class AnalyticsCardContainer extends React.Component {
    state = {
        typeOverdue: "modules",
        typeOverrated: "modules"
    }

    changeTypeOverdue() {
        this.setState({typeOverdue: this.state.typeOverdue === "modules" ? "tasks" : "modules"});
    }

    changeTypeOverrated() {
        this.setState({typeOverrated: this.state.typeOverrated === "modules" ? "tasks" : "modules"});
    }

    componentDidMount() {
        this.props.getBrief(this.props.managersIds);
        this.props.getProjects(this.props.projectsIds);
        this.props.getOverdueModules(this.props.projectsIds);
        this.props.getOverdueTasks(this.props.projectsIds);
        this.props.getOverratedModules(this.props.projectsIds);
        this.props.getOverratedTasks(this.props.projectsIds);
    }

    render() {
        return <AnalyticsCard {...this.props.analyticsCard} {...this.state}
                              changeTypeOverdue={this.changeTypeOverdue.bind(this)}
                              changeTypeOverrated={this.changeTypeOverrated.bind(this)}/>
    }
}


let mapStateToProps = (state) => ({
    managersIds: localStorage.getItem("managersIds").split(","),
    projectsIds: localStorage.getItem("projectsIds").split(","),
    analyticsCard: state.analyticsPage.analyticsCard
});

export default compose(
    connect(mapStateToProps, {
        getBrief,
        getProjects,
        getOverdueModules,
        getOverdueTasks,
        getOverratedModules,
        getOverratedTasks
    }),
)(AnalyticsCardContainer);