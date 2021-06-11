import instance, {convertParams, convertParamsForFilter} from "./instance";
import Cookies from "universal-cookie/lib";

const cookies = new Cookies();


export const analyticsApi = {
    getGeneral({managers, customers, projectsNames, type, dateStart, dateEnd}) {
        console.log(managers, customers, projectsNames, type, dateStart, dateEnd);
        return instance.get(`/analytics/general?${convertParamsForFilter(managers, customers, projectsNames, type, dateStart, dateEnd)}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            },
        }).then(response => {
            return response.data;
        })
    },
    getBrief(managersIds) {
        return instance.get(`/analytics/brief?${convertParams(managersIds, "managersIds")}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            }
        }).then(response => {
            return response.data;
        })
    },
    getProjects(projectsIds) {
        return instance.get(`/analytics/projects?${convertParams(projectsIds, "projectsIds")}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            },
        }).then(response => {
            return response.data;
        })
    },
    getOverdueModules(projectsIds) {
        return instance.get(`/analytics/overdue/modules?${convertParams(projectsIds, "projectsIds")}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            },
        }).then(response => {
            return response.data;
        })
    },
    getOverdueTasks(projectsIds) {
        return instance.get(`/analytics/overdue/tasks?${convertParams(projectsIds, "projectsIds")}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            },

        }).then(response => {
            return response.data;
        })
    },
    getOverratedModules(projectsIds) {
        return instance.get(`/analytics/overrated/modules?${convertParams(projectsIds, "projectsIds")}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            },

        }).then(response => {
            return response.data;
        })
    },
    getOverratedTasks(projectsIds) {
        return instance.get(`/analytics/overrated/tasks?${convertParams(projectsIds, "projectsId")}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            },
        }).then(response => {
            return response.data;
        })
    },
}