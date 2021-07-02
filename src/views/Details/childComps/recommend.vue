<template>
  <div class="recommend">
    <p class="hotgood">热门商品</p>
    <a v-if="recommendData.length!=0" v-for="item in recommendData">
      <div class="reco_img">
        <img :src="item.image" alt="">
      </div>
      <div class="reco_desc">
        <p>{{item.title}}</p>
        <span>￥{{item.discountPrice}}</span>
        <span>￥{{item.price}}</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default{
    name:'Recommend',
    props:{
      recommendData:{
        type:Array,
        default:()=>{
          return []
        }
      }
    },
    methods:{
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .recommend{
    width: 15rem;
    margin: 0 auto;
    margin-top: 0.9rem;
  }
  .hotgood{
    padding: 0.3rem;
    font-size: 0.7rem;
    height: 1.3rem;
    border-bottom: 0.02rem solid gray;
  }
  .recommend a{
    display: inline-block;
    width: 50%;
    padding: 0.3rem;
    height: 12rem;
    border:1px solid gainsboro ;
  }
  .reco_img{
    width: 100%;
    height: 80%;
    overflow: hidden;
  }
  .reco_img img{
    width: 100%;
  }
  .reco_desc{
    width: 100%;
    height: 25%;
    text-align: center;
  }
  .reco_desc p {
    font-size: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin-top: 0.2rem;
    padding: 0 0.1rem;
  }
  .reco_desc span:first-of-type{
    color: red;
    font-size: 0.7rem;
    margin-right: 0.2rem;
  }
  .reco_desc span:last-of-type{
    color: gray;
    font-size: 0.4rem;
    text-decoration: line-through;
  }
</style>
