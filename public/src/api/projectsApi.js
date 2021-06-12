import { response} from "./instance";

export const projectsApi = {
    getProjectsBrief({managers, customers, projectsNames, type, dateStart, dateEnd}) {
        return response("get", "projectscards", [managers, customers, projectsNames, type, dateStart, dateEnd]
        ).then(response => {
            return response.data;
        });
    },
    getProjectCard(id) {
        return response("get", `projectcard`, [id], "id")
            .then(response => {
                console.log(response);
                return response.data;
            })
    }
}
