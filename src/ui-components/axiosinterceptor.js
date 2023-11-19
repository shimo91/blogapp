import axios from "axios";
const axiosInstance = axios.create({
    baseURL:'http://54.159.167.39:4000'
});

//Request Interptor
axiosInstance.interceptors.request.use((config)=>{
    const accessToken = sessionStorage.getItem("userToken");
    if(accessToken){
        if(config) config.headers.token=accessToken;
    }
    return config;},
    (error)=>{
        return Promise.reject(error);
    }
)

export default axiosInstance
