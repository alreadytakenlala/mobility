/**
 * 字符串 工具类
 */
let stringUtil = {

    /**
     * 给字符串分段
     */
    stringSegment(content, segmentLength) {
        let stringArr = [];
        let tempStr = '';
        for (let i=0; i < content.length; i++) {
            tempStr += content.charAt(i);
            if (i%segmentLength == segmentLength - 1 || i == content.length - 1) {
                stringArr.push(tempStr);
                tempStr = '';
            }
        }
        return stringArr;
    },

    /**
     * 如果长度小于 n
     * 往字符串前面添加 0
     */
    add0InFront(value, n) {
        value = value.toString();
        if (value.length < n) {
            let addNum = n - value.length;
            for (let i=0; i < addNum; i++) {
                value = "0" + value;
            }
        }
        return value;
    },

    /**
     * 字符串倒置
     */
    invert(value) {
        value = value.toString();
        return value.split("").reverse().join("");
    },

    /**
     * 62进制转换为字符
     */
    toCharBy62(code) {
        code = parseInt(code);
        if (code >= 0 && code <= 9)
            return String.fromCharCode(code + 48);
        if (code >= 10 && code <= 35)
            return String.fromCharCode(code + 87);
        if (code >= 36 && code <= 62)
            return String.fromCharCode(code + 29);
        else
            console.warn("该code无法转换为字符串,code必须大于等于0，小于或等于62");
        return null;
    },

    /**
     * 解析字符串
     */
    compression(str) {
        let equalSign = "%3D";
        let comma = "%26";
        let id = str.substring(str.indexOf(equalSign) + equalSign.length,str.indexOf(comma));
        let referrerId = str.substring(str.indexOf(equalSign) + equalSign.length);
        console.log(referrerId);
    },

    /**
     * 该字符串是否包含另一个字符串
     */
    isContain(contain, beContain) {
        return contain.indexOf(beContain) !== -1;
    },

    /**
     * 去掉字符串前后空格
     */
    reSpaceBeforeAfter(str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    },

    /**
     * 生成随机字符串
     */
    randomString(len, isHasNum=true) {
        len = len || 32;
        let chars;
        if (isHasNum) chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789";
        else chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxy";
        let maxPos = chars.length;
        let newStr = '';
        for (let i = 0; i < len; i++) {
            newStr += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return newStr;
    },

    /**
     * 字符串是否全为数字
     */
    isNumber(value) {
        return /^[0-9]+$/.test(value);
    },

    /**
     * 字符串是否全为字母
     */
    isLetter(value) {
        return /^[a-zA-Z]+$/.test(value);
    },

    /**
     * 去除双引号
     */
    removeDoubleQuotes(str) {
        while(str.indexOf("\"") != -1) {
            str = str.replace("\"","");
        }
        return str;
    }
};

export default stringUtil;
