import {response} from "./instance";

export const filterApi = {
    getManagers() {
        return response("get", "managers"
        ).then(response => {
            return response.data;
        });
    },
    getCustomers() {
        return response("get", "customers"
        ).then(response => {
            return response.data;
        });
    },
    getProjects() {
        return response("get", "projects"
        ).then(response => {
            return response.data;
        });
    },
}
