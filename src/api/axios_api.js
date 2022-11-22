import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  // url: 'http://localhost:5000/api/v1/',
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const originalRequest = err.config;
    const errStatus = err.response.status;
    if (
        err.config.url.includes("login") ||
      err.config.url.includes("register") ||
      err.config.url.includes("verify") ||
      errStatus !== 401
    ) {
      return Promise.reject(err);
    }

    // request for a new tokens from the backend
    if (errStatus === 403) {
      // get refreshToken from localStorage
      const token = localStorage.getItem("user");
      const { refreshToken } = JSON.parse(token);

      // Making a new request to fetch a new refresh and access tokens
      if (refreshToken) {
        axiosInstance
          .post("student/refreshToken", {
            token: refreshToken,
          })
          .then((e) => {
            const {
              data: { accessToken, refreshToken },
            } = e.data;
            localStorage.setItem(
              "user",
              JSON.stringify({ accessToken, refreshToken })
            );
            
            return axios(originalRequest);
          });
      }
    }
    return Promise.reject(err);
  }
);
