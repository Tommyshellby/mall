<template>
  <div>
    <nav-bar class="cart_nav">
      <div slot='nav_main'>
        <div>购物车({{cartLength}})</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/Navbar.vue'
  import {mapGetters} from 'vuex'
  export default{
    name:'CartNav',
    components:{
      NavBar
    },
    computed:{
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
  .cart_nav{
    background-color: #FF69B4;
    font-size: 0.8rem;
    color: white
  }

</style>
