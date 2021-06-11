import {response} from "./instance";

export const analyticsApi = {
    getGeneral({managers, customers, projectsNames, type, dateStart, dateEnd}) {
        return response("get", "analytics/general", [managers, customers, projectsNames, type, dateStart, dateEnd]
        ).then(response => {
            return response.data;
        });
    },
    getBrief(managersIds) {
        return response("get", "analytics/brief", managersIds, "managersIds"
        ).then(response => {
            return response.data;
        })
    },
    getProjects(projectsIds) {
        return response("get", "analytics/projects", projectsIds, "projectsIds"
        ).then(response => {
            return response.data;
        })
    },
    getOverdueModules(projectsIds) {
        return response("get", "analytics/overdue/modules", projectsIds, "projectsIds"
        ).then(response => {
            return response.data;
        });
    },
    getOverdueTasks(projectsIds) {
        return response("get", "analytics/overdue/tasks", projectsIds, "projectsIds"
        ).then(response => {
            return response.data;
        });
    },
    getOverratedModules(projectsIds) {
        return response("get", "analytics/overrated/modules", projectsIds, "projectsIds"
        ).then(response => {
            return response.data;
        });
    },
    getOverratedTasks(projectsIds) {
        return response("get", "analytics/overrated/tasks", projectsIds, "projectsIds"
        ).then(response => {
            return response.data;
        });
    },
}
