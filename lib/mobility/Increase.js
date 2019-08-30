import Mobility from "./Mobility";

/**
 * 元素自增
 */
function increase(element, condition) {
    let num = condition.outset;
    let value = element.innerHTML;
    let interval = condition.duration / value;
    setTimeout(() => {
        let id = setInterval(() => {
            element.innerHTML = num;
            if (num == value) clearInterval(id);
            num++;
        }, interval);
    }, condition.delay);
}

/**
 * 自增
 */
export default class Increase extends Mobility {
    render() {
        this.elements.value.forEach(map => {
            let element = map.value;
            if (element.isVisible(this.getScrollTop())) {
                increase(element.value, this.condition);
                this.elements.remove(map.key);
            }
        });
    }
}
