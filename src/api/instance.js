import axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: "https://managers66bit.herokuapp.com/",
});

export default instance;