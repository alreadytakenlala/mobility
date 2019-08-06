import objUtil from "./obj";

/**
 * 方法 工具类
 */
let methodUtil = {

    /**
     * 合并两个对象所有属性
     * 合并第三个对象的同名方法，到最后执行(可选)
     * @param obj1 需要合并的对象
     * @param obj2 需要合并的对象
     * @param finalExecution 合并之后同名的情况下最后执行的方法
     */
    assign(obj1, obj2, finalExecution) {
        let self = {}; // 生成的新对象
        let attNames = objUtil.getAttributeNames(obj1,obj2); // 获取obj1、obj2的所有属性
        attNames.forEach((name) => {                            // 遍历所有属性
            if ((this.isMethod(obj1[name]) && this.isMethod(obj2[name])) ||  // 这个属性名是来自于方法
                (this.isMethod(obj1[name]) && typeof(obj2[name]) == "undefined") ||
                (typeof(obj1[name]) == "undefined" && this.isMethod(obj2[name]))) {
                if (this.isMethod(finalExecution[name])) { //如果有需要最后执行的方法
                    if (obj1[name] && obj2[name] && finalExecution[name]) { // 如果obj1、obj2、finalExecution都有该方法
                        addMethod(name, self, obj1, obj2, finalExecution);
                    }
                    else if (obj1[name] && obj2[name] && !finalExecution[name]) { // 如果只有obj1、obj2有该方法，finalExecution没有该方法
                        addMethod(name, self, obj1, obj2);
                    }
                    else if (obj1[name] && finalExecution[name]) { // 如果只有obj1有该方法,并且finalExecution也有该方法
                        addMethod(name, self, obj1, undefined, finalExecution);
                    }
                    else if (obj1[name] && !finalExecution[name]) {// 如果只有obj1有该方法,并且finalExecution没有该方法
                        addMethod(name, self, obj1);
                    }
                    else if (obj2[name] && finalExecution[name]) { // 如果只有obj2有该方法,并且finalExecution也有该方法
                        addMethod(name, self, undefined, obj2, finalExecution);
                    }
                    else if (obj2[name] && !finalExecution[name]) {
                        addMethod(name, self, undefined, obj2); // 如果只有obj2有该方法,并且finalExecution没有该方法
                    }
                    else {
                        console.warn("判断之外，可能一次产生错误");
                    }
                } else { // 如果没有需要最后执行的方法
                    if (obj1[name] && obj2[name]) { // 如果obj1、obj2都有这个方法
                        addMethod(name, self, obj1, obj2);
                    }
                    else if (obj1[name]) { // 如果只有obj1有该方法
                        addMethod(name, self, obj1);
                    }
                    else { // 如果只有obj2有该方法
                        addMethod(name, self, undefined, obj2);
                    }
                }
            }
            else if (this.isObject(obj1[name]) && this.isObject(obj2[name])) { // 如果该name为属性，并且obj1和obj2都有该属性
                self[name] = Object.assign(obj1[name], obj2[name]);
            }
            else if (obj1[name] && !obj2[name]) { // 如果该name为属性，并且obj1有该属性，obj2没有
                self[name] = obj1[name];
            }
            else if (!obj1[name] && obj2[name]) { // 如果该name为属性，并且obj2有该属性，obj1没有
                self[name] = obj2[name];
            }
            else {
                console.warn("basePage和page的同名属性，类型不同");
                console.info("obj1的属性 " + name + " 类型是：" + typeof(obj1[name]));
                console.info("obj2的属性 " + name + " 类型是：" + typeof(obj2[name]));
            }
        });
        return self;
    },

    /**
     * 合并方法
     * 执行原方法之前执行
     */
    assignBefore(method1, method2) {
        if (!this.isMethod(method1) || !this.isMethod(method2)) {
            console.warn("方法合并失败");
            return;
        }
        return function (...param) {
            let result = method2();
            if (result) {
                return result;
            }
            return method1(...param);
        }
    },

    /**
     * 合并方法
     * 执行原方法之后执行
     */
    assignLast(method1, method2) {
        if (!this.isMethod(method1) || !this.isMethod(method2)) {
            console.warn("方法合并失败");
            return;
        }
        return function (...param) {
            method1(...param);
            method2(...param);
        };
    },

    /**
     * 合并方法
     * 执行添加方法完成之后执行原方法
     */
    assignFinsh(method1, method2) {
        if (!this.isMethod(method1) || !this.isMethod(method2)) {
            console.warn("方法合并失败");
            return;
        }
        return function (...param) {
            method2().then((res) => {
                method1(res);
            }).catch(() => {
                console.warn("方法合并失败,附加方法异常");
            });
        }
    },

    /**
     * 检测是否是方法
     */
    isMethod(method) {
        return typeof(method) == "function";
    },

    /**
     * 检测是对象
     */
    isObject(obj) {
        return typeof(obj) == "object";
    }
};

/**
 * 添加方法
 * @param name 需要添加的方法名
 * @param self 需要添加到该对象
 * @param obj1 需要obj1的name方法
 * @param obj2 需要obj2的name方法
 * @param finalExecution 需要finalExecution的name方法
 */
function addMethod(name, self, obj1, obj2, finalExecution) {
    if (obj1 && obj2 && finalExecution) {
        self[name] = function (...param) {
            this[name + 1] = obj1[name];
            this[name + 2] = obj2[name];
            this[name + 3] = finalExecution[name];
            let res1 = this[name + 1](...param);
            let res2 = this[name + 2](...param);
            let res3 = this[name + 3](...param);
            return returnResult(res1, res2, res3);
        }
    }
    else if (obj1 && obj2) {
        self[name] = function (...param) {
            this[name + 1] = obj1[name];
            this[name + 2] = obj2[name];
            let res1 = this[name + 1](...param);
            let res2 = this[name + 2](...param);
            return returnResult(res1, res2);
        }
    }
    else if (obj1 && finalExecution) {
        self[name] = function (...param) {
            this[name + 1] = obj1[name];
            this[name + 2] = finalExecution[name];
            let res1 = this[name + 1](...param);
            let res2 = this[name + 2](...param);
            return returnResult(res1, res2);
        }
    }
    else if (obj1) {
        self[name] = obj1[name];
    }
    else if (obj2 && finalExecution) {
        self[name] = function (...param) {
            this[name + 1] = obj2[name];
            this[name + 2] = finalExecution[name];
            let res1 = this[name + 1](...param);
            let res2 = this[name + 2](...param);
            return returnResult(res1, res2);
        }
    }
    else if (obj2) {
        self[name] = obj2[name];
    }
    else {
        console.warn("判断异常，可能已经产生错误");
    }
}

/**
 * 返回结果
 */
function returnResult(res1, res2, res3) {
    if (res1) return res1;
    if (res2) return res2;
    if (res3) return res3;
}

export default methodUtil;
