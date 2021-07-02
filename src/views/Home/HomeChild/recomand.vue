<template>
  <div class="recomand">
    <a v-for="item in recomands" class="recomand_item" :href="item.link">
      <div class="icon">
        <img :src="item.image" alt="">
      </div>
      <p class="text">新品</p>
    </a>
  </div>
</template>

<script>
  export default {
    name:'Recomand',
    props:{
      recomands:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recomand{
    display: flex;
    height: 5rem;
    width: 15rem;
    margin: 0 auto;
    border-bottom: 0.16rem solid #eee;
  }
  .recomand_item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.7rem;
  }
  .icon, .text{
    flex: 1;
  }
  .icon img{
    margin-top: 0.3rem;
    width: 3rem;
  }
</style>
