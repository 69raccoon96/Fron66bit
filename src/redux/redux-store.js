import {applyMiddleware, combineReducers, createStore} from "redux";
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


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//Для удобного дебага
window.store = store;
export default store;