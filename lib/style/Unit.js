import str from "../lang/str";

/**
 * 单位数值 类
 * 例: new Unit('20px').add(10px) == 30px
 */
export default class Unit {

    /**
     * 构造方法
     */
    constructor(value="") {
        this.value = String(value);
    }

    /**
     * 加法运算
     */
    add(value) {
        let n1 = getNumEare(this.value);
        let n2 = getNumEare(value);
        let unit = getLetterEare(this.value);
        this.value = (n1 + n2) + (unit ? unit : getLetterEare(value));
        return this;
    }

    /**
     * 减法运算
     */
    sub(value) {
        let n1 = getNumEare(this.value);
        let n2 = getNumEare(value);
        let unit = getLetterEare(this.value);
        this.value = (n1 - n2) + (unit ? unit : getLetterEare(value));
        return this;
    }

    /**
     * 乘法运算
     */
    mult(value) {
        let n1 = getNumEare(this.value);
        let n2 = getNumEare(value);
        let unit = getLetterEare(this.value);
        this.value = (n1 * n2) + (unit ? unit : getLetterEare(value));
        return this;
    }

    /**
     * 除法运算
     */
    divi(value) {
        let n1 = getNumEare(this.value);
        let n2 = getNumEare(value);
        let unit = getLetterEare(this.value);
        this.value = (n1 / n2) + (unit ? unit : getLetterEare(value));
        return this;
    }

    /**
     * 对比-大于
     */
    greater(value) {
        let n1 = getNumEare(this.value);
        let n2 = getNumEare(value);
        return n1 > n2;
    }

    /**
     * 对比-小于
     */
    less(value) {
        let n1 = getNumEare(this.value);
        let n2 = getNumEare(value);
        return n1 < n2;
    }

    /**
     * 对比-等于
     */
    equals(value) {
        let n1 = getNumEare(this.value);
        let n2 = getNumEare(value);
        return n1 == n2;
    }

    /**
     * 对比-大于等于
     */
    greaterOrEquals(value) {
        let n1 = getNumEare(this.value);
        let n2 = getNumEare(value);
        return n1 >= n2;
    }

    /**
     * 对比-小于等于
     */
    lessOrEquals(value) {
        let n1 = getNumEare(this.value);
        let n2 = getNumEare(value);
        return n1 <= n2;
    }
}

/**
 * 取出数字部分
 */
function getNumEare(value) {
    value = String(value);
    let res = "";
    for (let i=0; i < value.length; i++) {
        let cr = value.charAt(i);
        if (str.isNumber(cr) || cr == '.' || cr == '-') res += cr;
    }
    return Number(res);
}

/**
 * 取出字母部分
 */
function getLetterEare(value) {
    value = String(value);
    let res = "";
    for (let i=0; i < value.length; i++) {
        let cr = value.charAt(i);
        if (str.isLetter(cr)) res += cr;
    }
    return String(res);
}
