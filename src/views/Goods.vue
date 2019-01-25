<template>
    <div>这是商品列车页面
    <!--<span>{{$route.params.goodsId}}</span>-->
    <!--<span>{{$route.params.admin}}</span>-->
        <router-link to="/goods/title">显示商品标题</router-link>
        <router-link to="/goods/image">显示商品图片</router-link>
        <router-view></router-view>
       <router-link to="/cart">购物车</router-link>
        </div>
</template>

<script>
    export default {
        name: "Goods"
    }
</script>

<style scoped>

</style>