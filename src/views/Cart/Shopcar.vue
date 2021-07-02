<template>
	<div class="cart">
    <cart-nav></cart-nav>
    <cart-scroll class="scroll" ref="scroll">
      <cart-list class="cart_list"></cart-list>
    </cart-scroll>
    <cart-bottom-bar></cart-bottom-bar>


  </div>
</template>

<script>
  import CartNav from './CartChild/CartNav.vue'
  import CartList from './CartChild/cartList.vue'
  import CartScroll from 'components/common/scroll/scroll.vue'
  import CartBottomBar from './CartChild/CartBottomBar.vue'
	export default {
		name:'Shopcar',
    components:{
      CartNav,
      CartList,
      CartScroll,
      CartBottomBar
    },
    methods:{

    },
    mounted(){

    },
    activated(){
      this.$bus.$on('cartImgLoad',()=>{
        this.$refs.scroll.refresh()
      })
    }
	}
</script>

<style>
  .cart{
    height: 100vh;
  }
  .scroll{
    height: calc(100% - 1.76rem - 1.92rem - 1.6rem);
    overflow: hidden;
  }
  .go_shop{
    width: 90%;
    margin: 0 auto;
  }
</style>
