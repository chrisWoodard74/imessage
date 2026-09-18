import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "deleopment" ? "http://localhost:3000" : "/api",
    withCredentials: true,
})