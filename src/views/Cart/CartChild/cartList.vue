<template>
  <div class="cartList">
    <cart-list-item v-for="(item,index) in cartList" :item='item' :key="index"></cart-list-item>
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
  }

</style>
