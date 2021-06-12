import {request} from "./instance";

export const analyticsApi = {
    getGeneral({managers, customers, projectsNames, type, dateStart, dateEnd}) {
        return request("get", "analytics/general", [managers, customers, projectsNames, type, dateStart, dateEnd]
        ).then(response => {
            return response.data;
        });
    },
    getBrief(managersIds) {
        return request("get", "analytics/brief", managersIds, "managersIds"
        ).then(response => {
            return response.data;
        })
    },
    getProjects(projectsIds) {
        return request("get", "analytics/projects", projectsIds, "projectsIds"
        ).then(response => {
            return response.data;
        })
    },
    getOverdueModules(projectsIds) {
        return request("get", "analytics/overdue/modules", projectsIds, "projectsIds"
        ).then(response => {
            return response.data;
        });
    },
    getOverdueTasks(projectsIds) {
        return request("get", "analytics/overdue/tasks", projectsIds, "projectsIds"
        ).then(response => {
            return response.data;
        });
    },
    getOverratedModules(projectsIds) {
        return request("get", "analytics/overrated/modules", projectsIds, "projectsIds"
        ).then(response => {
            return response.data;
        });
    },
    getOverratedTasks(projectsIds) {
        return request("get", "analytics/overrated/tasks", projectsIds, "projectsIds"
        ).then(response => {
            return response.data;
        });
    },
}
