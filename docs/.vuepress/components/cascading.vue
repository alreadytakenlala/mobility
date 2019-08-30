<template>
    <div id="cascading-demo">
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
<style>
    #cascading-demo {
        width: 100%;
        padding: 50px 10px 200px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
</style>
