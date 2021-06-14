import {projectsApi} from "../api/projectsApi";

const baseAction = "PROJECTS-";
const SET_PROJECTS_BRIEF = baseAction + "SET-PROJECTS-BRIEF";
const SET_PROJECT_CARD = baseAction + "SET-PROJECT-CARD";
const SET_PROJECT_CARD_CREATE = baseAction + "SET-PROJECT-CARD-CREATE";

const initialState = {
    projectsNames: [],
    projectsBrief: [],
    projectCard: {},
}

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS_BRIEF:
            return {...state, projectsBrief: [...action.projectsBrief]};
        case SET_PROJECT_CARD:
            return {...state, projectCard: action.projectCard};
        case SET_PROJECT_CARD_CREATE:
            return {...state, projectCreateCard: action.projectCreateCard};
        default:
            return state;
    }
}

const setProjectsBrief = (projectsBrief) => ({type: SET_PROJECTS_BRIEF, projectsBrief});
const setProjectCard = (projectCard) => ({type: SET_PROJECT_CARD, projectCard});

//thunk
export const getProjectsBrief = (data) => {
    return async (dispatch) => {
        let response = await projectsApi.getProjectsBrief(data);
        if (response.length === 0) {
            dispatch(setProjectsBrief([]));
            return "Проектов по данным критериям нет";
        }
        else
            dispatch(setProjectsBrief(response))
    }
}

export const getProjectCard = (id) => {
    return async (dispatch) => {
        let response = await projectsApi.getProjectCard(id);
        dispatch(setProjectCard(response))
    }
}


export const postProject = (data) => {
    return async (dispatch) => {
        let response = await projectsApi.postProject(data);
        //dispatch(setResponseResponse(response));
    }
}

export default projectsReducer;

