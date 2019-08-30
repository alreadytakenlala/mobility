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

<style>
    #drag-demo {
        padding: 30px 0;
    }
    #drag-demo .verificat {
        width: 500px;
        height: 40px;
        background-color: rgb(232,232,232);
        display: flex;
        flex-direction: row;
        position: relative;
        z-index: 0;
    }
    #drag-demo .corssed {
        user-select: none;
        overflow: hidden;
        color: white;
        background-color: #181818;
        z-index: 2;
    }
    #drag-demo .corssed span {
        display: block;
        width: 500px;
        line-height: 40px;
        text-align: center;
        letter-spacing: 10px;
    }
    #drag-demo .piece-bar {
        user-select: none;
        width: 40px;
        height: 38px;
        cursor: pointer;
        background-color: white;
        cursor: pointer;
        border: 1px solid #aaa;
        line-height: 40px;
        text-align: center;
        z-index: 3;
    }
    #drag-demo .surface {
        user-select: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: 40px;
        text-align: center;
        letter-spacing: 10px;
        z-index: 1;
    }
</style>
