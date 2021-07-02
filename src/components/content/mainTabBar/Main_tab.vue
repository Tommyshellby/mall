<template>
  <tab-bar>
    <tab-item path="/home" activeColor="skyblue">
      <img src="~assets/imgs/tabbar/仓储仓库.png" alt="" slot="item_icon">
      <img src="~assets/imgs/tabbar/仓储仓库2.png" alt="" slot="item_icon_active">
      <span slot="item_text">首页</span>
    </tab-item>
    <tab-item path="/mall" activeColor="skyblue">
      <img src="~assets/imgs/tabbar/开放.png" alt="" slot="item_icon">
      <img src="~assets/imgs/tabbar/开放2.png" alt="" slot="item_icon_active">
      <span slot="item_text">分类</span>
    </tab-item>
    <tab-item path="/shopcar" activeColor="skyblue">
      <img src="~assets/imgs/tabbar/卖家购物车.png" alt="" slot="item_icon">
      <img src="~assets/imgs/tabbar/卖家购物车2.png" alt="" slot="item_icon_active">
      <span slot="item_text">购物车</span>
    </tab-item>
    <tab-item path="/profile" activeColor="skyblue">
      <img src="~assets/imgs/tabbar/用户.png" alt="" slot="item_icon">
      <img src="~assets/imgs/tabbar/用户2.png" alt="" slot="item_icon_active">
      <span slot="item_text">我的</span>
    </tab-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabBar/Tabbar.vue'
  import TabItem from '../../common/tabBar/TabItem.vue'
  export default {
    name: 'MainTab',
    components: {
      TabBar,
      TabItem
    }
  }
</script>

<style>

</style>
