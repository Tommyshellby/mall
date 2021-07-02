<template>
  <div class="detail_info" v-if="Object.keys(detailData).length!=0">
    <div class="info_title">
      <p>{{detailData.title}}</p>
    </div>
    <div class="info_price">
      <span>{{detailData.price}}</span>
      <span>{{detailData.lowNowPrice}}</span>
      <span>{{detailData.discountDesc}}</span>
    </div>
    <div class="info_status">
      <p>{{detailData.sells}}</p>
      <p>{{detailData.fans}}</p>
      <p v-for="(item,index) in detailData.services" v-if="index == 0" :key='index'>{{detailData.services[0].name}}</p>
    </div>
    <div class="info_service">
      <p v-for="(item,index) in detailData.services" v-if="index==2||index==3" :key='index'>
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default{
    name:'BaseDetails',
    props:{
      detailData:{
        type:Object,
        default:function(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail_info{
    width: 15rem;
    margin: 0 auto;
    padding: 0.3rem 0;
    border-bottom: 0.14rem solid gainsboro;
  }
  /* title部分*/
  .info_title p{
    font-size: 0.74rem;
    padding: 0.3rem  0.3rem 0 0.3rem;
  }

  /* 价格部分*/
  .info_price{
    position: relative;
    margin-top: 0.2rem;
    padding: 0 0.3rem;
  }
  .info_price span{
    margin-right: 0.2rem;
  }
  .info_price span:first-child{
    color: orangered;
    font-size: 0.9rem;
  }
  .info_price span:nth-child(2){
    text-decoration: line-through;
  }
  .info_price span:last-child{
    display: inline-block;
    background-color: orangered;
    color: white;
    border-radius: 0.4rem;
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.2rem;
    position: absolute;
    top:0.2rem;
    right: 1rem;
    font-size: 0.64rem;
  }

  /* 销量 收藏等部分*/
  .info_status{
    display: flex;
    padding: 0 0.3rem;
    margin-top: 0.5rem;
  }
  .info_status p{
    font-size: 0.58rem;
    color: gray;
    flex: 1;
  }
  .info_status p:last-child{
    text-align: right;
  }
  .info_status p:nth-child(2){
    text-align: center;
  }

  /* 服务部分*/
  .info_service{
    display: flex;
    padding: 0 0.3rem;
    margin-top: 0.7rem;
  }
  .info_service p{
    flex:1;
    font-size: 0.6rem;
  }
  .info_service p:last-child{
    text-align: right;
  }
  .info_service p img{
    width: 0.7rem;
    vertical-align: middle;
  }
</style>
