import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import projectsReducer from "./projects-reducer";
import authReducer from "./auth-reducer";
import filterReducer from "./filter-reducer";
import analyticsReducer from "./analytics-reducer";

let reducers = combineReducers({
    filter: filterReducer,
    projectsPage: projectsReducer,
    analyticsPage: analyticsReducer,
    auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;