import Mobility from "./Mobility";
import Style from "../style/Style";
import Unit from "../style/Unit";

/**
 * 计算显示高度
 */
function getZIndex(i, leg, openIndex) {
    openIndex = Number(openIndex);
    if (i == openIndex) return leg;
    if (i < openIndex) return i;
    else return leg + openIndex - i;
}

/**
 * 排序
 */
function sort(condition, ele, subEle, openIndex) {
    let over = condition.width[1];
    for (let i=0; i < subEle.length; i++) {
        let style = new Style().append("z-index", getZIndex(i, subEle.length, openIndex))
            .append("position","absolute")
            .transform("translateX(" + new Unit(over).mult(i - openIndex).value + ")");
        if (condition.filter || condition.otherFileter) {
            if (i != openIndex) style.filter(condition.otherFileter || "none");
            else style.filter(condition.filter || "none");
        }
        style.addStyleForObj(subEle[i]);
    }
    let dis = 2 * openIndex - subEle.length + 1;
    ele.style.transform = "translateX(" + new Unit(over).mult(dis / 2).value + ")";
}

/**
 * 给元素及其子元素设置属性值
 */
function appendAtt(ele, name, value) {
    if (!ele.setAttribute) return;
    ele.setAttribute(name, value);
    let subEle = ele.childNodes;
    if (subEle.length > 0) subEle.forEach(item => {
        appendAtt(item, name, value);
    });
}

/**
 * 添加元素索引并且绑定子元素onMouseover方法
 */
function appendIndex(condition, ele, subEle, openIndex) {
    for (let i=0; i < subEle.length; i++) {
        appendAtt(subEle[i], "stretch-index", i);
        subEle[i].onmouseover = event => {
            let index = event.target.getAttribute("stretch-index");
            if (openIndex != index) {
                openIndex = index;
                sort(condition, ele, subEle, openIndex);
            }
            condition.change(openIndex);
        }
    }
}

export default class Cascading extends Mobility {

    constructor(mark, condition) {
        super(mark, condition);
        this.openIndex = 0;
    }

    render() {
        this.elements.value.forEach(map => {
            let ele = map.value.value;
            let subEle = ele.childNodes;
            ele.style.position = "relative";
            ele.style.width = this.condition.width[0] || 0;
            sort(this.condition, ele, subEle, this.openIndex);
            appendIndex(this.condition, ele, subEle, this.openIndex);
        });
    }
}
