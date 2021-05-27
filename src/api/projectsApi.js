import instance from "./instance";
import Cookies from "universal-cookie/lib";

const cookies = new Cookies();
export const projectsApi = {
    getProjectsBrief({managers, customers, projectName, dateStart, dateEnd}) {
        return instance.get("projectscards", {
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