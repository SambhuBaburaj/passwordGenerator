import axios from "axios";
// const baseURL='http://localhost:8000'
<<<<<<< HEAD
const baseURL =
  "https://password-generator-server-git-main-sambhubaburaj.vercel.app/";
=======
const baseURL='https://password-generator-server.vercel.app'

const Instance=axios.create({baseURL})
>>>>>>> a58dfb150eac21624dc341c24638972ca85e46ec

const Instance = axios.create({ baseURL });

Instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Userdata");

    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
    console.log(error);
  }
);

export default Instance;
