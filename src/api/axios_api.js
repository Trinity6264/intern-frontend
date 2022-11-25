import axios from "axios";
import jwtDecode from "jwt-decode";
import moment from "moment";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
});


// Getting a new access token 
axiosInstance.interceptors.request.use(async (req) => {
  const url = req.url;
  if (
    url.includes("login") ||
    url.includes("register") ||
    url.includes("verify") ||
    url.includes("headmaster") ||
    url.includes("refreshToken")
  ) {
    return req;
  }
  const token = localStorage.getItem("user");
  const { accessToken: at, refreshToken } = JSON.parse(token);
  req.headers["access_token"] = `Bearer ${at}`;
  const accessGranted = jwtDecode(at);

  const { exp } = accessGranted;
  const { _d } = moment(exp);
  const { _d: now } = moment();
  const isExpired = moment.unix(_d).diff(now) < 1;
  if (!isExpired) return req;
  const response = await axios.post(
    "http://localhost:5000/api/v1/student/refreshToken",
    {
      token: refreshToken,
    }
  );
  if (response.status === 201) {
    const {
      data: { accessToken, refreshToken },
    } = response.data;
    localStorage.setItem("user", JSON.stringify({ accessToken, refreshToken }));
    req.headers["access_token"] = `Bearer ${accessToken}`;
    return req;
  } else {
    Promise.reject(Error("Something went wrong"));
  }

  return req;
});
