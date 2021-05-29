import instance, {convertParamsForFilter} from "./instance";
import Cookies from "universal-cookie/lib";

const cookies = new Cookies();

export const projectsApi = {
    getProjectsBrief({managers, customers, projectName, type, dateStart, dateEnd}) {
        return instance.get(`projectscards${convertParamsForFilter(managers, customers, projectName, type, dateStart, dateEnd)}`, {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            }
        }).then(response => {
            return response.data;
        })
    },
    getProjectCard(id) {
        return instance.get("projectcard", {
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            },
            params:
                {
                    id,
                }
        }).then(response => {
            console.log(response);
            return response.data;
        })

    }
}