import sto from "@/utils/lang/sto";
import axios from '_axios@0.19.0@axios/index';
import qs from '_qs@6.7.0@qs';
import state from "@/store/state";
import ul from "@/utils/lang/url";
import str from "@/utils/lang/str";

axios.defaults.timeout = 5000;
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

axios.interceptors.request.use((config) => {
    return config;
},(err) =>{
    state.app.$notify.error({
        title: "错误",
        message: err.errors[0] ? err.errors[0].defaultMessage : err.error || err.error,
        duration: 0
    });
    return Promise.reject(err);
});


axios.interceptors.response.use((res) =>{
    if(res.data.code == 1000) {
        return Promise.resolve(res.data);
    } else {
        state.app.$notify({
            title: "警告",
            message: res.data.msg,
            type: "warning",
            duration: 0
        });
    }
    return res.data;
}, (error) => {
    state.app.$notify.error({
        title: "错误",
        message: error,
        duration: 0
    });
    return Promise.reject(error);
});

/**
 * 请求方法
 */
export default function req(api, param) {
    let reqUrl = ul.assignment(api.uri, param);
    if (api.way == "POST") {
        return axios.post(reqUrl, param, {headers: {
                "Content-Type": api.contentType
            }});
    } else {
        let reqParam = qs.stringify(param);
        if (api.way == "GET") {
            return axios.get(reqUrl + (reqParam ? ("?" + reqParam) : ""));
        }
        else if (api.way == "DELETE") {
            return axios.delete(reqUrl + (reqParam ? ("?" + reqParam) : ""));
        }
        else if (api.way == "PUT") {
            return axios.put(reqUrl + (reqParam ? ("?" + reqParam) : ""));
        }
        else if (api.way == "PATCH") {
            return axios.patch(reqUrl + (reqParam ? ("?" + reqParam) : ""));
        }
    }
}
