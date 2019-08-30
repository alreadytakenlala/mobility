<template>
    <div id="catalog-demo">
        <div class="left">
            <p>人生来得突然去也匆匆</p>
            <p>在不断感受着幸福和快乐的同时也不断接受困难和挫折</p>
            <p>在不断创造成功与希望的同时也不断接受着失败与折磨</p>
            <p>这是一段短暂而漫长的旅程</p>
            <p>它丰富多采也荆棘丛生</p>
            <p>然而</p>
            <p>知道这段旅程短暂的人才活得如此精彩</p>
            <p>才更加珍惜生命</p>
            <p>鏖战不停地与时间赛跑</p>
            <p>才会有结实而雄厚的事业</p>
            <p>有了困难和挫折才会使人不段完善自己的榜样</p>
            <p>正如“河里没有岩石怎能激起美丽的浪花”</p>
            <p>所以</p>
            <p>不必对困境是疑惑</p>
            <p>它是人生的一大收获</p>
            <p>人嘛</p>
            <p>总得相信：</p>
            <p>有生就有死</p>
            <p>有欢喜就有悲伤</p>
            <p>有从逢就有离别</p>
            <p>有成功就有失败</p>
            <p>有暴雨必然会有晴天</p>
            <p>就让它顺其自然吧！！！</p>
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
<style>
    #catalog-demo {
        display: flex;
        flex-direction: row;
    }
    #catalog-demo .left {
        width: 70%;
    }
    #catalog-demo .right {
        width: 30%;
    }
    #titles {
        width: 100px;
        padding: 30px;
        box-shadow: 3px 3px 10px 1px #aaa;
        -webkit-box-shadow: 3px 3px 10px 1px #aaa;
        -moz-box-shadow: 3px 3px 10px 1px #aaa;
    }
</style>
