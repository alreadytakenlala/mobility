export default {

    /**
     * 获取URL中的某个参数
     */
    getUrlParam(name) {
        let location = window.location.href;
        if (location.indexOf(name) == -1) return "";
        let index = location.indexOf(name) + name.length + 1;
        let end = location.indexOf('&', index) == -1 ? location.length : location.indexOf('&', index);
        return location.substring(index, end);
    },

    /**
     * 解析出get参数
     */
    parseGetParam(data) {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        });
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        }
        return dataStr;
    },

    /**
     * 获取浏览器平台信息
     */
    getBrowser() {
        return navigator.userAgent.toLowerCase();
    },

    /**
     * 给get变量赋值
     */
    assignment(uri, obj) {
        let start = false;
        let buffer = "";
        let newUri = "";
        for (let i=0; i < uri.length; i++) {
            let cr = uri.charAt(i);
            if (cr == "{") {
                start = true;
            } else {
                if (cr == "}") start = false;
                if (start) {
                    buffer += cr;
                } else {
                    newUri += buffer ? obj[buffer] ? obj[buffer] : "" : cr;
                    if (buffer && obj[buffer]) obj[buffer] = undefined;
                    buffer = "";
                }
            }
        }
        return newUri;
    },

    /**
     * 数组转换成 Get 请求携带参数
     */
    arrConversionGetParam(key, array) {
        if (!array || array.length == 0) return "";
        if (!array.length) return array;
        let param = "?";
        array.forEach((item,i) => {
            if (i != array.length) param += key + "=" + item + "&";
            else param += key + "=" + item;
        });
        return param;
    }
}
