import axios from 'axios';

axios.interceptors.request.use((config) => {
    //请求发送前处理
    config.url = '/api/v1' + config.url

    config.timeout = 20000;

    return config;
})

axios.interceptors.response.use(function(res){
    //在这里对返回的数据进行处理

    return res;
})