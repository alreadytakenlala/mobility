# 扑克牌
***

1. 特效介绍\
扑克牌特效可以使得元素上下层次位置叠放置到一起

2. 运用展示
<cascading></cascading>

3. 使用方法
```javascript6
<template>
    <div id="cascading">
        <div class="cards">
            <img src="../public/1.jpg"/>
            <img src="../public/2.jpg"/>
            <img src="../public/3.jpg"/>
            <img src="../public/4.jpg"/>
            <img src="../public/5.jpg"/>
        </div>
    </div>
</template>
<script>
    import {Cascading,Condition} from "../../../index";
    export default {
        mounted() {
            let cascading = new Cascading(".cards");
            let condition = new Condition();
            condition.setEleLevel(1);
            condition.setWidth("200px", "25px");
            condition.setFilter("contrast(120%) brightness(105%)");
            condition.setOtherFileter("contrast(95%) brightness(90%)");
            cascading.setCondition(condition);
            cascading.render();
            condition.change = index => this.bussinessIndex = index;
        }
    }
</script>
```
