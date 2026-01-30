import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
export const fetchPosts = () => API.get("/posts");
export const createPost = (data) => API.post("/posts", data);
export const fetchTrending = () => API.get("/posts/trending/topics");
export const fetchGroups = () => API.get("/groups");

