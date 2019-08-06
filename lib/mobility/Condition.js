export default class Condition {
    constructor() {
        this.mark = "";
        this.startMonitor = "";
        this.duration = 1000;
        this.delay = 0;
        this.direction = "bottom";
        this.count = 1;
        this.eleLevel = 0;
        this.width = "";
        this.height = "";
        this.filter = "";
        this.otherFileter = "";
        this.interval = 100;
    }

    /**
     * 设置标识
     * @param mark 可以是元素的class或者id值
     * @return {Condition} 条件对象
     */
    setMark(mark) {
        this.mark = mark;
        return this;
    }

    /**
     * 设置启动动销监视器 scroll/滚动到可视区域
     * @param startMonitor 监视条件
     * @return {Condition} 条件对象
     */
    setStartMonitor(startMonitor) {
        this.startMonitor = startMonitor;
        return this;
    }

    /**
     * 设置时长
     * @param duration 时长
     * @return {Condition} 条件对象
     */
    setDuration(duration) {
        this.duration = duration;
        return this;
    }

    /**
     * 设置延时
     * @param delay 延时
     * @return {Condition} 条件对象
     */
    setDelay(delay) {
        this.delay = delay;
        return this;
    }



    /**
     * 设置方向, 比如沉积效果，direction='top'/上浮,direction='bottom'/下沉
     * @param direction 方向
     * @return {Condition} 条件对象
     */
    setDirection(direction) {
        this.direction = direction;
        return this;
    }

    /**
     * 设置执行次数
     * @param count 次数
     * @return {Condition} 条件对象
     */
    setCount(count) {
        this.count = count;
        return this;
    }

    /**
     * 设置元素层次
     * @param eleLevel 元素层次
     * @return {Condition} 条件对象
     */
    setEleLevel(eleLevel) {
        this.eleLevel = eleLevel;
        return this;
    }

    /**
     * 设置宽度组
     * @param width 宽度组
     * @return {Condition} 条件对象
     */
    setWidth(...width) {
        this.width = width;
        return this;
    }

    /**
     * 设置高度组
     * @param height 高度组
     * @return {Condition} 条件对象
     */
    setHeight(...height) {
        this.height = height;
        return this;
    }

    /**
     * 设置元素过滤
     * @param filter 过滤值
     * @return {Condition} 条件对象
     */
    setFilter(filter) {
        this.filter = filter;
        return this;
    }

    /**
     * 设置时间间隔
     * @param interval 时间间隔
     * @return {Condition} 条件对象
     */
    setInterval(interval) {
        this.interval = interval;
        return this;
    }

    /**
     * 设置其他元素的过滤
     * @param otherFileter 过滤值
     * @return {Condition} 条件对象
     */
    setOtherFileter(otherFileter) {
        this.otherFileter = otherFileter;
        return this;
    }

    /**
     * 设置是否溢出隐藏
     */
    setOverflowHidden(overflowHidden) {
        this.overflowHidden = overflowHidden;
        return this;
    }

    /**
     * 判断相等
     * @param obj 对比对象
     * @return {boolean} 是否相等
     */
    equals(obj) {
        return !!(obj && this.mark == obj.mark
            && this.expectScrollTop == obj.expectScrollTop
            && this.duration == obj.duration
            && this.delay == obj.delay);
    }

    /**
     * 动效变化时调用方法
     */
    change(...param) {}
}
