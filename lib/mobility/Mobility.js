import Element from "../style/Element";
import ArrMap from "../container/ArrayMap";
import arrUtil from "../lang/arr";
import strUtil from "../lang/str";

// 是否绑定了滚动事件
let isBindScrollEvent = false;
// 是否绑定了鼠标事件
let isBindMouseEvent = false;
// 滚动条位置
let scrollTop;
// 需要监听滚动的对象
let listenerScroll = new ArrMap();

/**
 * 滚动事件
 */
function scrollEvent() {
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    listenerScroll.value.forEach(item => {
        let obj = item.value;
        obj.render();
        if (obj.condition.change) obj.condition.change();
    });
}

/**
 * 把 .class 分解成 Element对象
 */
function markParseElement(mark) {
    let elementList = document.querySelectorAll(mark);
    let elements = new ArrMap();
    for (let i=0; i < elementList.length; i++) {
        elements.put(i, new Element(elementList[i]));
    }
    return elements;
}

export default class Mobility {

    /**
     * 绑定滚动事件
     */
    bindScroll() {
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        window.addEventListener("scroll", () => {
            scrollEvent();
        });
    }

    /**
     * 绑定body 鼠标事件
     */
    bindMouse() {
        let body = document.querySelector("body");
        body.onmousedown = (e) => {
            if (this.onmousedown) this.onmousedown(e);
        };
        body.onmouseup = (e) => {
            if (this.onmouseup) this.onmouseup(e);
        };
        body.onmousemove = (e) => {
            if (this.onmousemove) this.onmousemove(e);
        };
    }

    constructor(mark, condition) {
        if (!isBindScrollEvent) {
            this.bindScroll();
            isBindScrollEvent = true;
        }
        if (!isBindMouseEvent) {
            this.bindMouse();
            isBindMouseEvent = true;
        }
        this.id = strUtil.randomString(8, false);
        this.elements = markParseElement(mark);
        this.condition = condition || {};
    }

    /**
     * 添加到滚动监听器
     */
    addListenerScroll() {
        listenerScroll.put(this.id, this);
    }

    /**
     * 设置条件
     */
    setCondition(condition) {
        this.condition = condition;
    }

    /**
     * 添加元素
     */
    addElement(element) {
        this.elements.put(this.elements.size(), element);
    }

    /**
     * 删除元素
     */
    removeElement(index) {
        this.elements.remove(index);
    }

    /**
     * 获取滚动条位置
     */
    getScrollTop() {
        return scrollTop;
    }

    /**
     * 渲染
     */
    render() {
        alert("开始渲染");
    }
}
