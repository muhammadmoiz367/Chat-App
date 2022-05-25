import axios from "axios";
// import jwt_decode from "jwt-decode";

const API = axios.create({ baseURL: "http://localhost:4000/api/v1" });

const authTokens = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;


console.log("authTokens", localStorage.getItem("token"));
API.interceptors.request.use((req) => {
  if (authTokens !== null) {
    console.log("inside profile ls");
    req.headers['x-auth-token']= authTokens.token;
  }
    return req;
});

export const loginAPI= formData => API.post("/auth/login", formData);
export const signupAPI= formData => API.post("/auth/signup", formData);

export const getAllUsersAPI = () => API.get("/user"); 

