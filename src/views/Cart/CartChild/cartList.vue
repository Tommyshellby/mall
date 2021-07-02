<template>
  <div class="cartList">
    <div v-if="$store.state.cartList.length===0" class="go_shop">购物车为空，去商场逛逛吧....</div>
    <cart-list-item v-for="(item,index) in cartList" :item='item' :key="index"  v-else></cart-list-item>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import cartListItem from './cartListItem.vue'

  export default{
    name:'CartList',
    components:{
      cartListItem
    },
    computed:{
      ...mapGetters(['cartList'])
    },
    data(){
      return {

      }
    },
    methods:{
      cartImgLoad(){
        this.$emit('cartImgLoad')
      }
    }
  }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .cartList{
    width: 15rem;
    margin: 0 auto;
    position: relative;
    left: 0;
    top: 1.76rem;
    right: 0;
  }
  .go_shop{
    font-size: 0.8rem;
    margin-top: 2rem;
  }
</style>
