import instance, {request, requestPost} from "./instance";

export const projectsApi = {
    getProjectsBrief({managers, customers, projectsNames, type, dateStart, dateEnd}) {
        return request("get", "projectscards", [managers, customers, projectsNames, type, dateStart, dateEnd]
        ).then(response => {
            return response.data;
        });
    },
    getProjectCard(id) {
        return request("get", `projectcard`, [id], "id")
            .then(response => {
                console.log(response);
                return response.data;
            })
    },
    postProject({projectId, customerId, dateStart, dateEnd}) {
        return requestPost("create/projectcard", {id: projectId, customerId, dateStart, dateEnd});
    }
}
