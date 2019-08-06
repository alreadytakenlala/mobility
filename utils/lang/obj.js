import metUtil from "./met";
import arrUtil from "./arr";

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
    clone(newObj = {}, origin) {
        for (let att in origin) {
            newObj[att] = origin[att];
        }
        return newObj;
    },

    /**
     * 深层对象拷贝
     */
    deepClone(newObj = {}, origin) {
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
    aop: function (obj) {
        let newObj = {};
        for (let att in obj) {
            if (metUtil.isMethod(obj[att]) && obj[att] != "before" && obj[att] != "after") {
                newObj[att] = async (...param) => {
                    let res1, res2, res3;
                    // before
                    if (metUtil.isMethod(obj["before"])) {
                        param = arrUtil.valueOf(param);
                        param.push(att);
                        res1 = obj["before"](...param);
                    }
                    // invoked
                    if (res1 instanceof Promise) {
                        await res1.then(res => {
                            res1 = res;
                            res2 = obj[att](...arrUtil.valueOf(res));
                        });
                    } else {
                        res2 = obj[att](...arrUtil.valueOf(res1));
                    }
                    // after
                    if (metUtil.isMethod(obj["after"])) {
                        if (res2 instanceof Promise) {
                            await res2.then(res => {
                                res3 = obj["after"](...arrUtil.valueOf(res));
                            });
                        } else {
                            res3 = obj["after"](...arrUtil.valueOf(res2));
                        }
                    }
                    return res3 || res2 || res1;
                }
            }
        }
        return newObj;
    }
};

export default objectUtil;
