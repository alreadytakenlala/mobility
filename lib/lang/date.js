/**
 * Date 工具类
 */
let dateUtil = {

    formatTime(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        return [year, month, day].map(this.formatNumber).join('/') + ' ' + [hour, minute, second].map(this.formatNumber).join(':');
    },

    formatNumber(n) {
        n = n.toString();
        return n[1] ? n : '0' + n
    },

    /**
     * 判断是否是处于今天
     * 返回今天到传入时间的距离
     */
    getTodayTime(strSime) {
        let stampTime = this.strTimeToStampTime(strSime); //参数时间的时间戳
        let nowTime = this.formatTime(new Date()); //现在的格式化时间
        let nowstampTime = Date.parse(new Date()); //现在时间转成时间戳
        let todayZeroStampTime = this.getZeroStampTime(nowTime);//今天凌晨零点时间时间戳
        let tomorrowStampTime = todayZeroStampTime + 24 * 3600 * 1000; //明天凌晨零点时间戳

        if (stampTime > nowstampTime && stampTime < tomorrowStampTime) {
            return stampTime - nowstampTime;
        }else{
            return false;
        }
    },

    /**
     * 获取当天凌晨零点时间戳
     */
    getZeroStampTime(strTime) {
        let subStr = new RegExp(/\d{1,2}:\d{1,2}:\d{1,2}/);//创建正则表达式对象
        let zeroStrTime = strTime.replace(subStr, "00:00:00");
        let zeroStampTime = this.strTimeToStampTime(zeroStrTime);
        return zeroStampTime;
    },

    /**
     * 日期格式化时间转时间戳
     */
    strTimeToStampTime(time) {
        let stampTime = Date.parse(new Date(time)); //把时间转成时间戳
        return stampTime;
    },

    /**
     * 获取距离采摘剩余时间
     */
    getTodayPickTime(strTime) {
        let reback = this.getTodayTime(strTime);
        if (reback) {
            let date = new Date(reback);
            return date.getHours() + ':' + date.getMinutes();
        }else{
            return false;
        }
    }
};

export default dateUtil;