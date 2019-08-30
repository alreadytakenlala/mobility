// 元素
let element;

export default class Element {

    constructor(element) {
        this.value = element;
    }

    /**
     * 是否在可视区域
     */
    isVisible(scrollTop) {
        return this.value.offsetTop - scrollTop <= document.documentElement.clientHeight && this.value.offsetTop > scrollTop;
    }
}
