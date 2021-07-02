<template>
  <div class="shop_info" v-if="Object.keys(shopInfo).length!=0">
    <div class="shop_info_head">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop_info_main">
      <div class="shop_info_main_baseInfo">
        <p class="shop_info_main_sells">
        {{shopInfo.sells}}
        <span>总销量</span>
        </p>
        <p class="shop_info_main_goodCounts">
        {{shopInfo.goodCounts}}
        <span>宝贝</span>
        </p>
      </div>
      <div class="shop_info_main_score">
        <p v-for="item in shopInfo.score">
          <span>{{item.name +':'}}</span>
          <span>{{item.score}}</span>

          <span class="level" v-if="item.score>=4.9"
          style="background-color: red; color: white">{{level[0]}}</span>

          <span class="level" v-else-if="item.score>=3.8"
          style="background-color: green; color: white;">{{level[1]}}</span>

          <span class="level" v-else style="background-color: gray;color: white">{{level[2]}}</span>
        </p>

      </div>
    </div>
    <div class="shop_info_footer">
      <a :href="shopInfo.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
  export default{
    name:'DetailsShopInfo',
    props:{
      shopInfo:{
        type:Object,
        default:()=>{
          return {}
        }
      }
    },
    data(){
      return {
        level:['高','中','低']
      }
    }
  }
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .shop_info{
    width: 15rem;
    margin: 0 auto;
    height: 10rem;
    margin-top: 1.1rem;
    border-bottom: 0.14rem solid gainsboro;
  }
  .shop_info_head img{
    width: 2.5rem;
    vertical-align: middle;
    padding-left: 0.3rem;
    padding-top: 0.3rem;
  }
  .shop_info_head span{
    font-size: 0.7rem;
    margin-left: 0.3rem;
  }

  .shop_info_main{
    display: flex;
    height: 5rem;
    padding: 0.4rem;
    width: 15rem;
  }

  .shop_info_main_baseInfo{
    flex: 1;
    display: flex;
    border-right:1px solid gray ;
    padding-right: 1.5rem;
  }
  .shop_info_main_sells,.shop_info_main_goodCounts{
    flex: 1;
    padding: 0.2rem;
    text-align: center;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
  .shop_info_footer a{
    display: block;
    text-align: center;
    margin: 0 auto;
    width: 3.5rem;
    height: 1.3rem;
    background-color: gainsboro;
    font-size: 0.7rem;
    line-height: 1.3rem;
    border-radius: 0.2rem;
  }
  .shop_info_main_score{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 1.5rem;
    position: relative;
   
  }
  .shop_info_main_score span{
    margin-right: 0.2rem;
     font-size: 0.6rem;
  }
</style>
