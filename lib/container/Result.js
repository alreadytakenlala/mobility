/**
 * 结果类
 */
class Result {
    constructor(code, msg, data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    setData(data) {
        this.data = data;
        return this;
    }
}

let resultEnum = {
    // 授权成功
    AUTHORIZEDSUCCESS : 88,

    // 授权失败
    AUTHORIZEDFAILURE : 89,

    // 无法授权
    UNAUTHORIZED : 90,

    // 有权限
    HASPERMISSION : 91,

    // 无权限
    NOPERMISSION : 92,

    // 执行成功
    SUCCESS : 93,

    // 执行失败
    FAIL : 94,

    // 主动参数
    INITIATIVE : 95
}

module.exports = {
    renum : resultEnum,
    Result : Result
}