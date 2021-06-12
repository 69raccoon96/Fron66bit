import axios from "axios";
import Cookies from "universal-cookie/lib";

const instance = axios.create({
    withCredentials: false,
    baseURL: "https://managers66bit.herokuapp.com/",
});

const cookies = new Cookies();
export const request = (command, url, params, paramName) => {
    const config = {headers: {"Authorization": "Bearer " + cookies.get("token")}};
    if (!params) {
        return instance[command](url, config);
    }
    if (paramName)
        return instance[command](url + convertParams(params, paramName), config);
    return instance[command](url + convertParamsForFilter(...params), config);
};


export const convertParams = (data, dataName) => {
    if (data.length === 0)
        return "";
    let params = data.reduce((a, b) => a + `&${dataName}=` + b);
    return `?${dataName}=` + params;
};

export const convertParamsForFilter = (managers, customers, projectsIds, type, dateStart, dateEnd) => {
    let result = "";
    if (managers && managers.length > 0)
        result += convertParams(managers, "managersIds") + "&";
    if (customers && customers.length > 0)
        result += convertParams(customers, "customersIds") + "&";
    if (projectsIds && projectsIds.length > 0)
        result += convertParams(projectsIds, "projectsIds") + "&";
    if (type)
        result += `type=${type}&`;
    if (dateStart)
        result += `dateStart=${dateStart}&`;
    if (dateEnd)
        result += `dateEnd=${dateEnd}&`;
    if (result.length === 0)
        return result;
    return "?" + result.slice(0, -1);
};

export default instance;
