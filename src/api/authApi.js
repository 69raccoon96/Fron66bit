import instance from "./instance";

export const authApi = {
    login(login, password) {
        return instance.post("auth/authenticate", {
                username: login,
                password: password
        })
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }

                return null;
            })
    },
}