import axios from 'axios'

const axiosConfige = axios.create({
    baseURL : "https://fakestoreapi.com/products",
});

axiosConfige.defaults.headers.common["Authorization"] = "yousef 401";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default axiosConfige;
  

