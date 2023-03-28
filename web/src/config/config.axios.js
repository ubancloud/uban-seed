import Vue from 'vue'
import axios from "axios/index";
import NProgress from 'nprogress'
import config from '@/config/config.default'

axios.defaults.baseURL=config.host;

axios.defaults.withCredentials = true;

axios.defaults.xsrfHeaderName = 'x-csrf-token';

axios.defaults.xsrfCookieName = 'csrfToken';

axios.interceptors.request.use((config) => {

    NProgress.start();

    config.headers['authorization']=(process.env.IS_ELECTRON?Vue.ls:Vue.$cookies).get('ACCESS_TOKEN')

    return config;

}, (error) => {

    return Promise.reject(error);

});

axios.interceptors.response.use((response) => {

    NProgress.done();

    if (response.data.error.code !== '0') {
        Vue.prototype.$notification.error({
            message: response.data.error.code,
            description: response.data.error.message
        });
    }

    return response;

}, (error) => {

    NProgress.done();

    Vue.prototype.$notification.error({
        message: 'error',
        description: error.toString()
    });

    return Promise.reject(error);
});

export default axios;
