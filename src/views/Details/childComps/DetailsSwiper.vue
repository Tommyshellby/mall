<template>
  <swiper
  :setSwiper="['15rem','9rem']"
  :isCycle="true"
  :setCycle="['10px','red','3px']"
  class="swiper">
    <ul slot='img'>
    	<li v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
        <img :src="topImages[0]" alt="" v-if="index === topImages.length-1">
      </li>

    </ul>
  </swiper>

</template>

<script>
  import Swiper from 'components/common/swiper/Swiper.vue'

  export default {
    name:'DetailsSwiper',
    components:{
      Swiper
    },
    props:{
      topImages:{
        type:Array,
        default:function(){
          return []
        }
      }
    },
    computed:{
      showLast(){
        console.log(this.topImages.length)
        return !this.topImages.length===0
      }
    },
  }
</script>

<style scoped>
  .swiper ul li{
    width: 15rem;
  }
  .swiper ul li img{
    width: 100%;
  }
</style>
