<template>
  <swiper
  :setSwiper="['15rem','7.6rem']"
  :isCycle="true"
  :setCycle="['10px','red','3px']"
  class="swiper">
    <ul slot="img">
    	<li v-for="(item,index) in imgs" :key="index">
        <a :href="item.link"><img :src="item.image" alt="" @load="imgLoad"></a>
      </li>
      <li v-if="showLast"><a :href="imgs[0].link"><img :src="imgs[0].image" alt=""></a></li>
    </ul>
  </swiper>
</template>

<script>
  import swiper from '../../common/swiper/Swiper.vue'
  export default{
    data(){
      return {
        isLoad:true
      }
    },
    props:{
      imgs:{
        type:Array,
      }
    },
    name:'MainSwiper',
    components:{
      swiper
    },
    computed:{
      showLast(){
        return !this.imgs.length==0
      }
    },
    methods:{
      imgLoad(){
        if(this.isLoad){
           this.$emit('swiperImgLoad')
           this.isLoad = false
        }

      }
    }
  }
</script>

<style>
  a{
    padding: 0 !important;
  }
 .swiper ul li a{
   display: block;
   width: 15rem;
 }
 .swiper ul li a img{
   width: 100%;
 }
</style>
