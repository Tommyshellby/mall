<template>
	<div class="cart">
    <cart-nav></cart-nav>
    <div v-if="$store.state.cartList.length===0" class="go_shop">购物车为空，去商场逛逛吧....</div>
    <cart-scroll class="scroll" ref="scroll" v-else>
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
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
  }
</style>
