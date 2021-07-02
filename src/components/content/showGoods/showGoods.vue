<template>
  <div class="showGood">
    <div>
      <show-goods-item v-for="(item,index) in goods"  :goodsItem='item' :key="index">
      </show-goods-item>
    </div>
  </div>
</template>

<script>
  import showGoodsItem from './showgoodsItem.vue'
  export default{
    name:'HomeGood',
    props:{
      goods:{
        type:Array,
      }
    },
    data(){
      return {
        BSscroll:null
      }
    },
    components:{
      showGoodsItem
    }
  }
</script>

<style>
  .showGood{
    width: 15rem;
    margin: 0 auto;
    overflow: hidden;
  }
</style>
