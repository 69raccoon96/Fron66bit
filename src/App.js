import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import React from "react";
import {Route, withRouter} from "react-router-dom";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import ProjectCardContainer from "./components/Projects/ProjectCard/ProjectCardContainer";
import AnalyticsContainer from "./components/Analytics/AnalyticsContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {logout, start} from "./redux/auth-reducer";
import ProjectCreateContainer from "./components/Projects/ProjectCreate/ProjectCreateContainer";
import AnalyticsCardContainer from "./components/Analytics/AnalyticsCard/AnalyticsCardContainer";


class App extends React.Component {
    componentDidMount() {
        this.props.start();
    }

    render() {
        if (!this.props.isAuth)
            return <LoginContainer name={this.props.name} lastName={this.props.lastName}/>

        return (
            <div className={"app-wrapper"}>

                <Header logout={this.props.logout} firstName={this.props.firstName} lastName={this.props.lastName}/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route exact path={"/"} render={() => <ProjectsContainer/>}/>
                    <Route path={"/projects"} render={() => <ProjectsContainer/>}/>
                    <Route path={"/project/card/:projectId"} render={() => <ProjectCardContainer/>}/>
                    <Route path={"/project/create"} render={() => <ProjectCreateContainer/>}/>
                    <Route exact path={"/analytics"} render={() => <AnalyticsContainer/>}/>
                    <Route path={"/analytics/card"} render={() => <AnalyticsCardContainer/>}/>
                </div>

            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName
});

export default compose(
    withRouter,
    connect(mapStateToProps, {logout, start}))(App);
