<template>
    <div id="increase-demo">
        <div>
            <div><span id="var1">8100</span>万</div>
            <span>英雄联盟的注册玩家</span>
        </div>
        <div>
            <div><span id="var2">550000</span>+</div>
            <span>同时在线人数突破</span>
        </div>
        <div>
            <div>TOP<span id="var3">10</span></div>
            <span>年度中国十大游戏研发商</span>
        </div>
    </div>
</template>

<script>
    import {Increase,Condition} from "../../../index";

    export default {
        mounted() {
            this.var1();
            this.var2();
            this.var3();
        },
        methods: {
            var1() {
                let increase = new Increase("#var1");
                let condition = new Condition();
                condition.setDuration(3000);
                condition.setDelay(500);
                increase.setCondition(condition);
                condition.setOutset(7000);
                increase.render();
            },

            var2() {
                let increase = new Increase("#var2");
                let condition = new Condition();
                condition.setDuration(3000);
                condition.setDelay(500);
                increase.setCondition(condition);
                condition.setOutset(549000);
                increase.render();
            },

            var3() {
                let increase = new Increase("#var3");
                let condition = new Condition();
                condition.setDuration(3000);
                condition.setDelay(500);
                increase.setCondition(condition);
                increase.render();
            }
        }
    };
</script>
<style>
    #increase-demo {
        display: flex;
        justify-content: center;
        flex-direction: row;
        font: 30px bold;
        margin: 20px 0;
    }
    #increase-demo > div {
        text-align: center;
    }
    #increase-demo > div + div {
        margin-left: 50px;
    }
    #increase-demo > div > span {
        font-size: 16px;
    }
</style>