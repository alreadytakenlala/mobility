import ArrMap from "../container/ArrayMap";
import Mobility from "./Mobility";
import Style from "../style/Style";
import Element from "../style/Element";

// 是否已经存在上浮动画
let isHasRise = false;
// 是否已经存在下沉动画
let isHasSink = false;

/**
 * 上浮动效
 */
function floatingUp() {
    if (!isHasRise) {
        let keyframesParam = new ArrMap();
        keyframesParam.put("from", new Style().append("opacity",0).append("transform", "translate3d(0px, 10rem, 0)").value);
        keyframesParam.put("to", new Style().append("opacity",1).append("transform", "none").value);

        Style.appendKeyframes("rise", keyframesParam);
        isHasRise = true;
    }
}

/**
 * 下沉动效
 */
function sink() {
    if (!isHasSink) {
        let keyframesParam = new ArrMap();
        keyframesParam.put("from", new Style().append("opacity",0).append("transform", "translate3d(0px, -10rem, 0)").value);
        keyframesParam.put("to", new Style().append("opacity",1).append("transform", "none").value);
        Style.appendKeyframes("sink", keyframesParam);
        isHasSink = true;
    }
}

/**
 * 沉积
 */
export default class Deposition extends Mobility {
    constructor(mark, condition) {
        super(mark, condition);
        this.isAlearyHiddenElement = false;
    }

    render() {
        if (!this.isAlearyHiddenElement) this.hiddenElement();
        this.elements.value.forEach(item => {
            if (item.value.isVisible(this.getScrollTop())) {
                let direction = this.condition.direction;
                if (direction == "top") {
                    floatingUp();
                    this.keyfame = "rise";
                }
                else if (direction == "bottom") {
                    sink();
                    this.keyfame = "sink";
                }
                this.grading(item.value);
                this.elements.remove(item.key);
            }
        });
    }

    /**
     * 隐藏元素
     */
    hiddenElement() {
        if (this.condition.eleLevel == 0) {
            this.elements.value.forEach(map => {
                map.value.value.style.opacity = "0";
            });
        }
        else if (this.condition.eleLevel == 1) {
            this.elements.value.forEach(map => {
                let subEle = map.value.value.childNodes;
                subEle.forEach((ele,i) => {
                    if (subEle[i].style) subEle[i].style.opacity = "0";
                });
            });
        }
    }

    /**
     * 分级
     */
    grading(element) {
        if (this.condition.eleLevel == 0) {
            this.level0(element);
        }
        else if (this.condition.eleLevel == 1) {
            this.level1(element);
        }
    }

    /**
     * 0层 动效
     */
    level0(element) {
        let style = new Style().setEffectiveTime(this.condition.duration + this.condition.delay).animationName(this.keyfame).animationDuration(this.condition.duration / 1000 + "s").animationIterationCount(this.condition.count)
            .animationDelay(this.condition.delay / 1000 + "s").transitionDelay(this.condition.delay / 1000 + "s").append("opacity", 1);
        style.addStyleForObj(element.value);
    }

    /**
     * 1层 动效
     */
    level1(element) {
        let subEle = element.value.childNodes;
        subEle.forEach((ele,i) => {
            let durationTime = this.condition.duration + i * this.condition.interval;
            let delayTime = i * this.condition.interval;
            let style = new Style().setEffectiveTime(durationTime + delayTime).animationName(this.keyfame).animationDuration(durationTime / 1000 + "s")
                .animationIterationCount(this.condition.count).animationDelay(delayTime / 1000 + "s").transitionDelay(delayTime / 1000 + "s").append("opacity", 1);
            style.addStyleForObj(ele);
        });
    }
}
