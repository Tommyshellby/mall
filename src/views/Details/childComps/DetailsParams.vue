<template>
  <div class="detailsParams">
    <div class="detailsParams_good_info">
      <p>产品信息</p>
      <table>
        <tr v-for="item in detailPramas.infos">
          <td>{{item.key}}</td>
          <td>{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class="detailsParams_size">
      <p>参考尺寸</p>
      <table v-for="sizes in detailPramas.size">
        <tr v-for="item in sizes">
          <td v-for="(size,index) in item">{{size}}</td>
        </tr>
      </table>
    </div>
    <div v-if="detailPramas.image != ''" class="detailsParams_img">
      <img :src="detailPramas.image" alt="">
    </div>
  </div>
</template>

<script>
  export default{
    name:'DetailsParams',
    props:{
      detailPramas:{
        type:Object
      }
    },
    methods:{
      offsetTop(){
        return document.getElementsByClassName('detailsParams')[0].offsetTop
      }
    }
  }
</script>

<style scoped>
  .detailsParams{
    width: 15rem;
    margin: 0 auto;
    padding: 0.3rem;
  }
  .detailsParams_img{
    width: 100%;
  }
  .detailsParams_img img{
    width: 100%;
  }
  .detailsParams_good_info  p{
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
  .detailsParams_good_info table{
    border-collapse: collapse;
    width: 100%
  }
  .detailsParams_good_info table td{
    width: 30%;
    height: 1rem;
    font-size: 0.64rem;
    border: 0.02rem solid gray;
    padding-left: 0.2rem;
  }
  .detailsParams_good_info table tr td:last-child{
    width: 70%;
  }
  .detailsParams_size table{
    border-collapse: collapse;
    width: 100%;
    margin-top: 0.3rem;
  }
  .detailsParams_size table td{
    width: 20%;
    height: 1rem;
    font-size: 0.64rem;
    border: 0.02rem solid gray;
    text-align: center;
  }
  .detailsParams_size p{
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
  }
</style>
