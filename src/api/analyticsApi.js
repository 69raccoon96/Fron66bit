import instance from "./instance";
import Cookies from "universal-cookie/lib";

const cookies = new Cookies();
const dataToParams = (data, dataName) => {
    if (data.length === 0)
        return null;
    let params = data.reduce((a,b) => a + `&${dataName}=` + b);
    return `?${dataName}=` + params;
}

export const analyticsApi = {
    getGeneral({managers, customers, projectName, dateStart, dateEnd}) {
        return instance.get("/analytics/general", {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            },
            params: {
                managers, customers, projectName, dateStart, dateEnd
            }
        }).then(response => {
            return response.data;
        })
    },
    getBrief(managersIds) {
        return instance.get(`/analytics/brief${dataToParams(managersIds, "managersId")}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            }
        }).then(response => {
            return response.data;
        })
    },
    getProjects(projectsIds) {
        return instance.get(`/analytics/projects${dataToParams(projectsIds, "projectsId")}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            },

        }).then(response => {
            return response.data;
        })
    },
    getOverdueModules(projectsIds) {
        return instance.get(`/analytics/overdue/modules${dataToParams(projectsIds, "projectsId")}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            },

        }).then(response => {
            return response.data;
        })
    },
    getOverdueTasks(projectsIds) {
        return instance.get(`/analytics/overdue/tasks${dataToParams(projectsIds, "projectsId")}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            },

        }).then(response => {
            return response.data;
        })
    },
    getOverratedModules(projectsIds) {
        return instance.get(`/analytics/overrated/modules${dataToParams(projectsIds, "projectsId")}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            },

        }).then(response => {
            return response.data;
        })
    },
    getOverratedTasks(projectsIds) {
        return instance.get(`/analytics/overrated/tasks${dataToParams(projectsIds, "projectsId")}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            },

        }).then(response => {
            return response.data;
        })
    },
}