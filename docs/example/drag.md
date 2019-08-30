# 滑动验证框
***

1. 特效介绍\
移动块特效可以使得元素平滑移动

2. 运用展示
<drag></drag>

3. 使用方法
```javascript6
<template>
    <div id="drag-demo">
        <div class="verificat">
            <div class="corssed" :style="`width:${width}`">
                <span>{{piece?'验证通过':'请按住滑块，拖动到最右边'}}</span>
            </div>
            <div class="piece-bar"><></div>
            <span class="surface">请按住滑块，拖动到最右边</span>
        </div>
    </div>
</template>
<script>
    import {Drag, Condition} from "../../../index";
    export default {
        data() {
            return {
                width: 0,   // 通过部分宽度
                piece: false,  // 验证条是否通过
            }
        },
        mounted() {
            setTimeout(() => {
                this.appendDrag();
            }, 1000);
        },
        methods: {

            /**
             * 给验证条附加拖动
             */
            appendDrag() {
                let drag = new Drag(".piece-bar");
                this.dragCondition = new Condition().setDirection(24).setWidth("500px").setCount(1);
                drag.setCondition(this.dragCondition);
                drag.render();
                this.dragCondition.change = this.dragChange;
            },
            
            /**
             * 拉动验证条
             */
            dragChange(x) {
                this.width = x;
                if (x == "500px") {
                    this.piece = true;
                    this.dragCondition.setOpen(false);
                }
            },
        }
    }
</script>
```
