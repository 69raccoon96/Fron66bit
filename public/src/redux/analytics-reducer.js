import {analyticsApi} from "../api/analyticsApi";

const baseAction = "ANALYTICS-";

const SET_MANAGERS = baseAction + "SET-MANAGERS"
const SET_PROJECTS = baseAction + "SET-PROJECTS";
const SET_CARD_BRIEF = baseAction + "SET-CARD-BRIEF";
const SET_CARD_PROJECTS = baseAction + "SET-CARD-PROJECTS";
const SET_CARD_OVERDUE_TASKS = baseAction + "SET-CARD-OVERDUE-TASKS";
const SET_CARD_OVERDUE_MODULES = baseAction + "SET-CARD-OVERDUE-MODULES";
const SET_CARD_OVERRATED_TASKS = baseAction + "SET-CARD-OVERRATED-TASKS";
const SET_CARD_OVERRATED_MODULES = baseAction + "SET-CARD-OVERRATED-MODULES";

const initialState = {
    managersIds: [],
    projectsIds: [],
    analyticsCard: {
        brief: [],
        projects: {},
        overdueTasks: {},
        overdueModules: {},
        overratedTasks: {},
        overratedModules: {},
    },
}

const analyticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MANAGERS:
            localStorage.setItem("managersIds", action.managersIds);
            return {...state, managersIds: [...action.managersIds]};
        case SET_PROJECTS:
            localStorage.setItem("projectsIds", action.projectsIds);
            return {...state, projectsIds: [...action.projectsIds]};
        case SET_CARD_BRIEF:
            return {...state, analyticsCard:{...state.analyticsCard, brief: [...action.brief]} };
        case SET_CARD_PROJECTS:
            return {...state, analyticsCard:{...state.analyticsCard, projects: {...action.projects}} };
        case SET_CARD_OVERDUE_TASKS:
            return {...state, analyticsCard:{...state.analyticsCard, overdueTasks: {...action.overdueTasks}} };
        case SET_CARD_OVERDUE_MODULES:
            return {...state, analyticsCard:{...state.analyticsCard, overdueModules: {...action.overdueModules}} };
        case SET_CARD_OVERRATED_TASKS:
            return {...state, analyticsCard:{...state.analyticsCard, overratedTasks: {...action.overratedTasks}} };
        case SET_CARD_OVERRATED_MODULES:
            return {...state, analyticsCard:{...state.analyticsCard, overratedModules: {...action.overratedModules}} };
        default:
            return state;
    }
}

const setManagers = (managersIds) => ({type: SET_MANAGERS, managersIds});
const setProjects = (projectsIds) => ({type: SET_PROJECTS, projectsIds});

const setBriefInf = (brief) => ({type: SET_CARD_BRIEF, brief});
const setProjectsCard = (projects) => ({type: SET_CARD_PROJECTS, projects});
const setOverdueTasks = (overdueTasks) => ({type: SET_CARD_OVERDUE_TASKS, overdueTasks});
const setOverdueModules = (overdueModules) => ({type: SET_CARD_OVERDUE_MODULES, overdueModules});
const setOverratedTasks = (overratedTasks) => ({type: SET_CARD_OVERRATED_TASKS, overratedTasks});
const setOverratedModules = (overratedModules) => ({type: SET_CARD_OVERRATED_MODULES, overratedModules});


export const getGeneral = (data) => {
    return async (dispatch) => {
        let response = await analyticsApi.getGeneral(data);
        dispatch(setManagers(response.managersIds));
        dispatch(setProjects(response.projectsIds));
    }
};

export const getBrief = (managersIds) => {
    return async (dispatch) => {
        let response = await analyticsApi.getBrief(managersIds);
        dispatch(setBriefInf(response));
    }
};

export const getProjects = (projectsIds) => {
    return async (dispatch) => {
        let response = await analyticsApi.getProjects(projectsIds);
        dispatch(setProjectsCard(response));
    }
};

export const getOverdueModules = (projectsIds) => {
    return async (dispatch) => {
        let response = await analyticsApi.getOverdueModules(projectsIds);
        dispatch(setOverdueModules(response));
    }
};

export const getOverdueTasks = (projectsIds) => {
    return async (dispatch) => {
        let response = await analyticsApi.getOverdueTasks(projectsIds);
        dispatch(setOverdueTasks(response));
    }
};
export const getOverratedModules = (projectsIds) => {
    return async (dispatch) => {
        let response = await analyticsApi.getOverratedModules(projectsIds);
        dispatch(setOverratedModules(response));
    }
};

export const getOverratedTasks = (projectsIds) => {
    return async (dispatch) => {
        let response = await analyticsApi.getOverratedTasks(projectsIds);
        dispatch(setOverratedTasks(response));
    }
};



export default analyticsReducer;

