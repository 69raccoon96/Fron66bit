import instance from "./instance";
import Cookies from "universal-cookie/lib";

const cookies = new Cookies();
export const filterApi = {
    getManagers() {
        return instance.get("managers", {headers: {
                "Authorization": "Bearer " + cookies.get("token")
            }})
            .then(response => {
                return response.data;
            })
    },
    getCustomers() {
        return instance.get("customers", {headers: {
                "Authorization": "Bearer " + cookies.get("token")
            }})
            .then(response => {
                return response.data;
            })
    },
    getProjects() {
        return instance.get("projects", {headers: {
                "Authorization": "Bearer " + cookies.get("token")
            }})
            .then(response => {
                return response.data;
            })
    },
}