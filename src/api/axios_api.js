import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  // url: 'http://localhost:5000/api/v1/',
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalRequest = err.config;
    console.log("Talkom", originalRequest);
    const errStatus = err?.response?.status;
    if (
      err.config.url.includes("login") ||
      err.config.url.includes("register") ||
      err.config.url.includes("verify") ||
      errStatus !== 401
    ) {
      return Promise.reject(err);
    }

    // request for a new tokens from the backend
    if (errStatus === 401 && !originalRequest._retry) {
      // get refreshToken from localStorage
      originalRequest._retry = true;
      const token = localStorage.getItem("user");
      const { refreshToken } = JSON.parse(token);

      // Making a new request to fetch a new refresh and access tokens
      if (refreshToken) {
        axiosInstance
          .post("student/refreshToken", { token: `${refreshToken}` })
          .then((e) => {
            const {
              data: { accessToken, refreshToken },
            } = e.data;
            console.log("status", refreshToken);
            localStorage.setItem(
              "user",
              JSON.stringify({ accessToken, refreshToken })
            );
            const token = localStorage.getItem("user");
            const { accessToken: at } = JSON.parse(token);
            axiosInstance.defaults.headers["access_token"] = `Bearer ${at}`;
            axios.defaults.headers.common["access_token"] = `Bearer ${at}`;
            console.log("yaana", originalRequest.defaults);
            return axiosInstance(originalRequest);
          });
      }
      console.log(err);
      return Promise.reject(err.response);
    }
    return Promise.reject(err.response);
  }
);
