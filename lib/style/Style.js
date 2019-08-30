import ArrayMap from "../container/ArrayMap";
import strUtil from "../lang/str";

/**
 * 样式类
 */
export default class Style {

    /**
     * 构造方法
     */
    constructor(value={}) {
        this.value = value;
        this.effectiveTime = null;
        this.effectiveTimes = new ArrayMap();
    }

    /**
     * 添加默认有效时间
     * @param effectiveTime 有效时间
     */
    setEffectiveTime(effectiveTime) {
        this.effectiveTime = effectiveTime;
        return this;
    }

    /**
     * 附加属性
     */
    append(key, value) {
        this.value[key] = value;
        return this;
    }

    /**
     * 合并样式
     */
    merge(style={}) {
        return valueect.assign(this, style);
    }

    /**
     * 添加属性有效时间
     * 如果这里没有设置，则使用对象的默认值
     */
    addEffectiveTimes(attName, effectiveTime) {
        this.effectiveTimes.put(attName, effectiveTime);
    }

    /**
     * 添加到其它对象样式中
     */
    addStyleForObj(obj) {
        if (!obj.style) return;
        for (let att in this.value) {
            obj.style[att] = this.value[att];
            if (this.effectiveTime || this.effectiveTimes.size() > 0) {
                if (String(this.effectiveTimes.get(att)) == "forever") return;
                setTimeout(() => {
                    obj.style[att] = null;
                }, this.effectiveTimes.get(att) || this.effectiveTime);
            }
        }
    }

    /**
     * transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜
     */
    transform(value) {
        return this.append("-webkit-transform", value)
            .append("transform",value);
    }

    /**
     * 设置 3D 元素的基点位置
     */
    perspectiveOrigin(originX, originY) {
        return this.append("perspective-origin", originX + " " + originY)
            .append("-webkit-perspective-origin", originX + " " + originY);
    }

    /**
     * 规定需要绑定到选择器的 keyframe 名称
     */
    animationName(value) {
        return this.append("-moz-animation-name", value)
            .append("-webkit-animation-name", value)
            .append("animation-name", value);
    }

    /**
     * 规定在动画开始之前的延迟
     */
    animationDelay(value) {
        return this.append("-moz-animation-delay", value)
            .append("-webkit-animation-delay", value)
            .append("animation-delay", value);
    }

    /**
     * 规定完成动画所花费的时间，以秒或毫秒计
     */
    animationDuration(value) {
        return this.append("-moz-animation-duration", value)
            .append("-webkit-animation-duration", value)
            .append("animation-duration", value);
    }

    /**
     * 规定动画应该播放的次数
     */
    animationIterationCount(value) {
        return this.append("-moz-animation-iteration-count", value)
            .append("-webkit-animation-iteration-count", value)
            .append("animation-iteration-count", value);
    }

    /**
     * 规定过渡效果何时开始
     */
    transitionDelay(value) {
        return this.append("transition-delay", value)
            .append("-moz-transition-delay", value)
            .append("-webkit-transition-delay", value)
            .append("-o-transition-delay", value);
    }

    /**
     * 定义过渡效果花费的时间。默认是 0
     */
    transitionDuration(value) {
        return this.append("transition-duration", value)
            .append("-moz-transition-duration", value)
            .append("-webkit-transition-duration", value)
            .append("-o-transition-duration", value);
    }

    /**
     * 滤镜
     */
    filter(value) {
        return this.append("-webkit-filter", value)
            .append("filter", value);
    }

    /**
     * 对齐方式
     */
    align(value, direction="row") {
        this.append("display", "flex").append("flex-direction", direction);
        if (value == 1)  this.append("justify-content", "center").append("align-items", "flex-start");
        else if (value == 2) this.append("justify-content", "flex-end").append("align-items", "center");
        else if (value == 3) this.append("justify-content", "center").append("align-items", "flex-end");
        else if (value == 4) this.append("justify-content", "flex-start").append("align-items", "center");
        else if (value == 13 || value == 31) this.append("align-items", "center");
        else if (value == 24 || value == 42) this.append("justify-content", "center");
        else if (value == 12 || value == 21) this.append("justify-content", "flex-end").append("align-items", "flex-start");
        else if (value == 23 || value == 32) this.append("justify-content", "flex-end").append("align-items", "flex-end");
        else if (value == 34 || value == 43) this.append("justify-content", "flex-state").append("align-items", "flex-end");
        else if (value == 41 || value == 14) this.append("justify-content", "flex-state").append("align-items", "flex-state");
        return this;
    }

    /**
     * 给页面附加动画
     * @param name keyframes名
     * @param arrayMaps 接收一个ArrayMap类对象
     */
    static appendKeyframes(name, ...arrayMaps) {
        let keyframes = "@keyframes " + name + "{";
        arrayMaps.forEach(arrayMap => {
            arrayMap.value.forEach(item => {
                keyframes += item.key + strUtil.removeDoubleQuotes(JSON.stringify(item.value)).replace(",", ";");
            });
        });
        keyframes += "}";
        const style = document.createElement("style");
        style.type = "text/css";
        style.innerHTML = keyframes;
        document.querySelector("head").appendChild(style);
    }
}
