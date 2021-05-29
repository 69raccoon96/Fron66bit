import axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: "https://managers66bit.herokuapp.com/",
});

export const convertParams = (data, dataName) => {
    if (data.length === 0)
        return null;
    let params = data.reduce((a, b) => a + `&${dataName}=` + b);
    return `?${dataName}=` + params;
};

export const convertParamsForFilter = (managers, customers, projectName, type, dateStart, dateEnd) => {
    let result = "";
    if (managers)
        result += convertParams(managers, "managerId") + "&";
    if (customers)
        result += convertParams(customers, "customerId") + "&";
    if (projectName)
        result += convertParams(projectName, "managerId") + "&";
    if (type)
        result += `?type=${type}&`;
    if (dateStart)
        result += `?dateStart=${dateStart}&`;
    if (dateEnd)
        result += `dateEnd=${dateEnd}&`;
    return result;
};

export default instance;