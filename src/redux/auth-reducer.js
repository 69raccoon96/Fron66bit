import {authApi} from "../api/authApi";
import Cookies from "universal-cookie/lib";
import {setCustomers, setManagers, setProjects} from "./filter-reducer";
import {setProjectsBrief} from "./projects-reducer";

const cookies = new Cookies();

const baseAction = "AUTH-";
const SET_USER_DATA = baseAction + "SET-USER-DATA"

const initialState = {
    userId: null,
    email: null,
    login: null,
    firstName: null,
    lastName: null,
    userType: null,
    isAuth: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

const setUserData = ({id, userType, firstName, lastName, isAuth}) => ({
    type: SET_USER_DATA,
    data: {id, userType, firstName, lastName, isAuth}
});


//thunk
export const login = ({login, password}) => {
    return async (dispatch) => {
        let response = await authApi.login(login, password);
        if (!response)
            return;
        if (response === 401) {
            return "Неправильный логин или пароль";
        }
        cookies.set('firstName', response.firstName, {path: '/'});
        cookies.set('lastName', response.lastName, {path: '/'});
        cookies.set('token', response.token, {path: '/'});
        cookies.set('id', response.id, {path: '/'});
        cookies.set('userType', response.userType, {path: '/'});
        response["isAuth"] = true;
        dispatch(setUserData(response));
    }
}

export const logout = () => {
    return async (dispatch) => {
        cookies.remove("firstName");
        cookies.remove("lastName");
        cookies.remove("token");
        cookies.remove("id");
        dispatch(setManagers(null));
        dispatch(setProjects(null));
        dispatch(setCustomers(null));
        dispatch(setProjectsBrief([]));
        dispatch(setUserData({id: null, userType: null, firstName: null, lastName: null, isAuth: false}));
    }
}

export const start = () => {
    return (dispatch) => {
        if (cookies.get("token")) {
            dispatch(setUserData({
                id: cookies.get("id"), userType: cookies.get("userType"),
                firstName: cookies.get("firstName"), lastName: cookies.get("lastName"), isAuth: true
            }));
        }
    }
}

export default authReducer;

