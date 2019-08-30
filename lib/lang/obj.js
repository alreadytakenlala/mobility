import met from "./met";
import arr from "./arr"

/**
 * 对象 工具类
 */
let objectUtil = {

    /**
     * 获取两个对象所有的属性名（排除共同属性）
     */
    getAttributeNames(obj1, obj2) {
        let attributeName = [];
        for (let att in obj1) {
            attributeName.push(att);
        }
        for (let att in obj2) {
            let hasName = false;
            attributeName.forEach((item) => {
                if (item == att)
                    hasName = true;
            });
            if (!hasName)
                attributeName.push(att);
        }
        return attributeName;
    },

    /**
     * 获取对象所有属性
     */
    getFields(obj) {
        let fields = [];
        for (let field in obj) {
            fields.push({key: field, value: obj[field]});
        }
        return fields;
    },

    /**
     * 对象拷贝
     */
    clone(origin, newObj = {}) {
        for (let att in origin) {
            newObj[att] = origin[att];
        }
        return newObj;
    },

    /**
     * 深层对象拷贝
     */
    deepClone(origin, newObj = {}) {
        if (!origin) return null;
        if (typeof origin == "object" && origin.length == 0) return [];
        for (let att in origin) {
            if (typeof(origin[att]) == "object") {
                newObj[att] = this.deepClone(origin[att]);
            } else {
                newObj[att] = origin[att];
            }
        }
        return newObj;
    },

    /**
     * 对象切面
     */
    aop(obj) {
        let newObj = {};
        for (let att in obj) {
            if (met.isMethod(obj[att]) && obj[att] != "before" && obj[att] != "after") {
                newObj[att] = (...param) => {
                    let res1,res2,res3;
                    if (met.isMethod(obj["before"])) {
                        param.push(att);
                        res1 = obj["before"](...param);
                    }
                    res1 = arr.parseToArray(res1);
                    res2 = obj[att](...res1);
                    if (met.isMethod(obj["after"])) {
                        res2 = arr.parseToArray(res2);
                        res2.push(att);
                        res3 = obj["after"](...res2);
                    }
                    return res3 || res2 || res1;
                }
            }
        }
        return newObj;
    }
};

export default objectUtil;
