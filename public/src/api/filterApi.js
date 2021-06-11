import {request} from "./instance";

export const filterApi = {
    getManagers() {
        return request("get", "managers"
        ).then(response => {
            return response.data;
        });
    },
    getCustomers() {
        return request("get", "customers"
        ).then(response => {
            return response.data;
        });
    },
    getProjects() {
        return request("get", "projects"
        ).then(response => {
            return response.data;
        });
    },
}
