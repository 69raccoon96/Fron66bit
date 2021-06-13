import {filterApi} from "../api/filterApi";
const baseAction = "FILTER-";
const SET_MANAGERS = baseAction + "SET-MANAGERS"
const SET_CUSTOMERS = baseAction + "SET-CUSTOMERS";
const SET_PROJECTS = baseAction + "SET-PROJECTS";
const initialState = {
    managers: null,
    customers: null,
    projects: null,
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MANAGERS:
            return {...state, managers: [...action.managers]};
        case SET_CUSTOMERS:
            return {...state, customers: [...action.customers]};
        case SET_PROJECTS:
            return {...state, projects: [...action.projects]};
        default:
            return state;
    }
};

const setManagers = (managers) => ({type: SET_MANAGERS, managers});
const setCustomers = (customers) => ({type: SET_CUSTOMERS, customers});
const setProjects = (projects) => ({type: SET_PROJECTS, projects});

export const getManagers = () => {
    return async (dispatch) => {
        let response = await filterApi.getManagers();
        dispatch(setManagers(response))
    }
};

export const getCustomers = () => {
    return async (dispatch) => {
        let response = await filterApi.getCustomers();
        dispatch(setCustomers(response))
    }
};

export const getFilterProjects = () => {
    return async (dispatch) => {
        let response = await filterApi.getProjects();
        dispatch(setProjects(response));
    }
};

export default filterReducer;