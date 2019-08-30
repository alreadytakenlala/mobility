# 悬浮目录
***

1. 特效介绍\
悬浮目录特效可以使得目录始终悬浮于窗口，而不随滚动消失

2. 运用展示
<catalog></catalog>

3. 使用方法
```javascript6
<template>
    <div id="catalog">
        <div class="left">
            <p>人生来得突然去也匆匆</p>...
        </div>
        <div class="right">
            <ul id="titles">
                <li>标题一</li>
                <li>标题二</li>
                <li>标题三</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {Catalog,Condition} from "../../../index";

    export default {
        mounted() {
            let catalog = new Catalog("#titles");
            let condition = new Condition();
            condition.setSpacing(100);
            catalog.setCondition(condition);
            catalog.addListenerScroll();
            catalog.render();
        }
    }
</script>
```