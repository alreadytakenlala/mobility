import Mobility from "./Mobility";
import Unit from "../style/Unit";

/**
 * 向下移动
 */
function moveDownward(element, ele, i, offsetTops, scrollTop, condition) {
    if (!element.isVisible(scrollTop + condition.spacing)) {
        ele.style.position = "fixed";
        ele.style.top = new Unit(ele.scrollTop).add(condition.spacing+"px").value;
    }
}

/**
 * 向上移动
 */
function moveUp(element, ele, i, offsetTops, scrollTop, condition) {
    if (scrollTop + condition.spacing <= offsetTops[i] || scrollTop + condition.spacing <= ele.offsetTop) {
        ele.style.position = "inherit";
    }
}

/**
 * 固定目录于视图
 */
export default class Catalog extends Mobility {

    constructor(mark, condition) {
        super(mark, condition);
        this.offsetTops = [];
        this.elements.value.forEach(map => {
            this.offsetTops.push(map.value.value.offsetTop);
        });
    }

    render() {
        this.elements.value.forEach((map,i) => {
            let element = map.value;
            let ele = element.value;
            if (this.scrollTop) {
                if (this.getScrollTop() > this.scrollTop) {
                    moveDownward(element, ele, i, this.offsetTops, this.getScrollTop(), this.condition);
                } else {
                    moveUp(element, ele, i, this.offsetTops, this.getScrollTop(), this.condition);
                }
            }
        });
        this.scrollTop = this.getScrollTop();
    }
}
