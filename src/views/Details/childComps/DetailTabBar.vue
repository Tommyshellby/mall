<template>
  <div class="bottom_nav">
    <div class='bottom_nav_left'>
      <a href="">
        <p><img src="~assets/imgs/detail/customer-service.png" alt=""></p>
        <span>客服</span>
      </a>
      <a href="">
        <p><img src="~assets/imgs/detail/home.png" alt=""></p>
        <span>店铺</span>
      </a>
      <a href="">
        <p><img src="~assets/imgs/detail/good.png" alt=""></p>
        <span>收藏</span>
      </a>

    </div>
    <div class='bottom_nav_right'>
      <div><span @click='addToCart'>加入购物车</span></div>
      <div><span>购买</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailTabBar',
    methods:{
      addToCart(){
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .bottom_nav{
    width: 15rem;
    margin: 0 auto;
    height: 1.9rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    box-shadow: 0 -0.02rem 0.12rem 0 gray;
  }
  .bottom_nav_left,.bottom_nav_right{
    flex: 1;
    display: flex;
  }
  .bottom_nav_left a{
    flex: 1;
    font-size: 0.4rem;
    text-align: center;
    margin-top: 0.1rem;
  }
  .bottom_nav_left a img{
    width: 40%;
  }

  .bottom_nav_right div{
    flex: 1;
    text-align: center;
    line-height: 1.9rem;
    background-color: yellow;
  }
  .bottom_nav_right div span{
     font-size: 0.70rem;
  }
  .bottom_nav_right div:last-child{
    background-color: deeppink;
  }
</style>
