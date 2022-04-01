import axios from "axios";
// 这是一个网站学到的封装，网址为：https://www.cnblogs.com/panax/p/10942889.html

// generate one axios instance
var instance = axios.create({timeout: 1000*12})
// set post request
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode';

// 拦截器 interceptor
instance.interceptors.request.use()