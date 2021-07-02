<template>
  <div class="recommend">
    <h3>hhhhhhhhhhhhhhhh</h3>
  </div>
</template>

<script>
  export default{
    name:'Recommend',
    props:{
      recoData:{
        type:Array,
        default:function(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend{
    width: 15rem;
    margin: 0 auto;
  }
  .recommend_head{
    padding: 0.3rem;
    height: 1.3rem;
    border-bottom: 0.02rem solid gainsboro;
    font-size: 0.68rem;
  }
  .recommend a{
    display: inline-block;
    width: 50%;
    padding: 0.3rem;
    height: 12rem;
    background-color: aqua;
    border: 1px solid ghostwhite;
  }
  .reco_img{
    width: 100%;
    height: 80%;
    overflow: hidden;
  }
  .reco_img img{
    overflow: hidden;
  }
</style>
