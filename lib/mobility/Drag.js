import Mobility from "./Mobility";
import Unit from "../style/Unit";

export default class Drag extends Mobility{
    render() {
        this.bindMouse();
        this.elements.value.forEach(map => {
            let element = map.value;
            let ele = element.value;
            ele.onmousedown = (e) => {
                element.state = 0;
                element.x = e.x;
                element.y = e.y;
            };
        });
    }

    /**
     * 鼠标移动事件
     */
    onmousemove(e) {
        if (!this.condition.open) return false;
        this.elements.value.forEach(map => {
            let element = map.value;
            let ele = element.value;
            if (element.state == 0) {
                let dir = this.condition.direction;

                let top = ele.style.top || 0;
                let left = ele.style.left || 0;

                let moveX = new Unit(e.x+"px").sub(element.x).value;
                let moveY = new Unit(e.y+"px").sub(element.y).value;

                let unitX = new Unit(left).add(moveX);
                let unitY = new Unit(top).add(moveY);

                let resLeft = unitX.greater(0) ? unitX.value : String(0);
                let resTop = unitY.greater(0) ? unitY.value : String(0);
                if (this.condition.width) {
                    resLeft = new Unit(resLeft).less(this.condition.width) ? resLeft : this.condition.width;
                }
                if (this.condition.height) {
                    resTop = new Unit(resTop).less(this.condition.height) ? resTop : this.condition.height;
                }

                if (dir == 13 || dir == 31) {
                    ele.style.top = resTop;
                }
                else if (dir == 24 || dir == 42) {
                    ele.style.left = resLeft;
                } else {
                    ele.style.left = resLeft;
                    ele.style.top = resTop;
                }

                element.x = e.x;
                element.y = e.y;

                if (this.condition.change && typeof(this.condition.change) == "function") {
                    this.condition.change(resLeft, resTop, moveX, moveY);
                }
            }
        });
    }

    /**
     * 松开鼠标事件
     */
    onmouseup(e) {
        let dir = this.condition.direction;
        this.elements.value.forEach(map => {
            let element = map.value;
            let ele = element.value;
            element.state = 1;
            if (!this.condition.open) return;
            if (this.condition.count == 1) {
                let id = setInterval(() => {
                    if (dir == 13 || dir == 31) {
                        let top = new Unit(ele.style.top).sub(1).value;
                        ele.style.top = top;
                        this.condition.change(0, top, 0, 1);
                        if (new Unit(ele.style.top).greaterOrEquals(0)) clearInterval(id);
                    }
                    else if (dir == 24 || dir == 42) {
                        let left = new Unit(ele.style.left).sub(1).value;
                        ele.style.left = left;
                        this.condition.change(left, 0, 1, 0);
                        if (new Unit(ele.style.left).lessOrEquals(0)) clearInterval(id);
                    } else {
                        clearInterval(id);
                    }
                }, this.condition.delay > 0 ? this.condition.delay : 5);
            }
        });
    }
}
