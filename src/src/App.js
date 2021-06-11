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
import Profile from "./components/Profile/Profile";

class App extends React.Component {
    state = {
        pathname: ""
    }

    componentDidMount() {
        this.props.start();
        this.setState({pathname: this.getPathRootName()});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.location !== this.props.location)
            this.setState({pathname: this.getPathRootName()});
    }

    getPathRootName() {
        let path = this.props.location.pathname.split("/", 2).filter((e) => e);
        return path.length === 0 || path[0] === "projects" ? "Проекты" : "Аналитика";
    }

    render() {
        if (!this.props.isAuth)
            return <LoginContainer name={this.props.name} lastName={this.props.lastName}/>;
        return (
            <div className={"app-wrapper"}>
                <Header/>
                <div className={"app-wrapper-content"}>
                    <Navbar/>
                    <div className={"body"}>
                        <h2 className={"path"}>{this.state.pathname}</h2>
                        <Profile logout={this.props.logout} firstName={this.props.firstName}
                                 lastName={this.props.lastName}
                                 userType={this.props.userType}/>
                        <Route exact path={"/"} render={() => <ProjectsContainer/>}/>
                        <Route exact path={"/projects"} render={() => <ProjectsContainer/>}/>
                        <Route path={"/project/card/:projectId"} render={() => <ProjectCardContainer/>}/>
                        <Route path={"/projects/create"} render={() => <ProjectCreateContainer/>}/>
                        <Route exact path={"/analytics"} render={() => <AnalyticsContainer/>}/>
                        <Route path={"/analytics/card"} render={() => <AnalyticsCardContainer/>}/>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    userType: state.auth.userType
});

export default compose(
    withRouter,
    connect(mapStateToProps, {logout, start}))(App);