import axios from "axios"
// const baseURL='http://localhost:8000'
const baseURL='https://password-generatorserver.vercel.app/'

const Instance=axios.create({baseURL})


Instance.interceptors.request.use(
(config)=>
{


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

)





export default Instance
