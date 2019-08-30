<template>
    <div id="deposition-demo">
        <div>他漫无目的地闲逛，在一条街道的拐弯处，他看到一家店铺的门前人头攒动，原来是一些家庭</div>
        <div>主妇正在排队购买木炭。那一块块躺在纸箱里的木炭忽然让保罗的眼睛一亮，使他看到了一线希</div>
        <div>望。于是在接下来的两个星期里，保罗雇了几名烧炭工，将庄园里烧焦的树木加工成优质的木炭</div>
        <div>送到集市上的木炭经销店。</div>
    </div>
</template>
<script>
    import {Deposition,Condition} from "../../../index";

    export default {
        mounted() {
            let deposition = new Deposition("#deposition-demo");
            let condition = new Condition();
            condition.setDirection("top");
            condition.setEleLevel(1);
            condition.setDuration(2000);
            deposition.setCondition(condition);
            deposition.addListenerScroll();
            deposition.render();
        }
    }
</script>
<style>
    #deposition-demo {
        margin: 20px 0;
    }
    #deposition-demo div:first-child {
        margin-left: 2em;
    }
</style>