import axios from 'axios'
import {baseURL,timeout} from './config'
const requets = axios.create({
    baseURL,
    timeout
})
// 添加请求拦截器
requets.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const userStr = localStorage.getItem('user')
    const use = JSON.parse(userStr)
    const token = use.state.token
    if(token){
        config.headers.Authorization = 'Bearer ' + token
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
requets.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if(response.status!=200){
      return Promise.reject(response.data);
    }
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default requets