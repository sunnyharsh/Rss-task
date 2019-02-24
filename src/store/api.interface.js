import axios from "axios";

const apiInterface = axios.create({
    baseURL: "/api"
});

export default apiInterface;
