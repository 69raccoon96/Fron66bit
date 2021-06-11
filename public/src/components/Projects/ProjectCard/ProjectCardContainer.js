import React from 'react';
import ProjectCard from "./ProjectCard";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProjectCard} from "../../../redux/projects-reducer";
import {compose} from "redux";

class ProjectCardContainer extends React.Component {
    componentDidMount() {
        let projectId = this.props.match.params.projectId;
        this.props.getProjectCard(projectId);
    }

    render() {
        console.log("render");
        return <ProjectCard {...this.props.projectCard}/>
    }
}

let mapStateToProps = (state) => ({
    projectCard: state.projectsPage.projectCard
});

export default compose(
    connect(mapStateToProps, {getProjectCard}),
    withRouter,
)(ProjectCardContainer);