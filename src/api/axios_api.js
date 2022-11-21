import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (
      err.config.url.includes("login") ||
      err.config.url.includes("register") ||
      err.config.url.includes("verify")
    ) {
      return Promise.reject(err);
    }
    // request for a new tokens from the backend
    console.log("Play Fuck u");
  }
);

