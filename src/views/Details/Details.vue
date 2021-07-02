<template>
  <div class="details">
    <details-nav :titles="['商品','参数','评论','推荐']"
                 :indexChange="indexChange"
                 @navClick="navClick">
    </details-nav>
    <details-scroll class="details-scroll"
                    ref="scroll"
                    @scroll="scroll"
                    :pullUpLoad='true'
                    :probeType='3'>
      <details-swiper :topImages="topImages"></details-swiper>
      <base-details :detailData="detailData"></base-details>
      <datail-shop-info :shopInfo="shopData"></datail-shop-info>
      <details-params :detailPramas="detailPramas" ref="params"></details-params>
      <details-image :detailInfo="detailInfo" @detailImgLoad='detailImgLoad'></details-image>
      <details-content :detailsContent="detailsContent" ref="content"></details-content>
      <!-- <Recommend :recommendData="recommendData" ref="recommend"></Recommend> -->
      <showGoods ref="recommend" :goods="recommendData"></showGoods>

    </details-scroll>
    <detail-tab-bar @addCart="addToCart"></detail-tab-bar>
    <back-top v-if="isShowBackTop" @click.native='backClick'></back-top>



  </div>

</template>

<script>
  import {getDetailsData,Goods,Shop,Pramas,Content,getRecommend} from 'network/details.js'
  import DetailsNav from './childComps/DetailsNav.vue'
  import DetailsSwiper from './childComps/DetailsSwiper.vue'
  import BaseDetails from './childComps/BaseDetails.vue'
  import DatailShopInfo from './childComps/Details_ShopInfo.vue'
  import DetailsScroll from 'components/common/scroll/scroll.vue'
  import DetailsImage from './childComps/DetailsImages.vue'
  import DetailsParams from './childComps/DetailsParams.vue'
  import DetailsContent from './childComps/Details_content.vue'

  import Recommend from './childComps/recommend.vue'
  import showGoods from 'components/content/showGoods/showGoods.vue'
  import DetailTabBar from './childComps/DetailTabBar.vue'

  import {debounce} from 'common/utils.js'
  import {imgLoadmixin,backTopMixin} from 'common/misxins.js'


  export default {
    name:'Details',
    components:{
      DetailsNav,
      DetailsSwiper,
      BaseDetails,
      DatailShopInfo,
      DetailsScroll,
      DetailsImage,
      DetailsParams,
      DetailsContent,
      showGoods,
      Recommend,
      DetailTabBar,
    },
    data(){
      return {
        datas:null,
        topImages:null,
        detailData:{},
        shopData:{},
        detailInfo:[],
        detailPramas:{},
        detailsContent:{},
        indexChange:0,
        recommendData:[],
        navOffsetTops:[0],
        isShowBackTop:false,
        id:null
      }
    },
    /* 混入*/
    mixins:[imgLoadmixin,backTopMixin],
    computed:{
      /* 计算组件的offsetTop*/
      paramsOffset(){
        return this.$refs.params.offsetTop()
      },
      contentOffset(){
        return this.$refs.content.offsetTop()
      },
      recommendOffset(){
        return this.$refs.recommend.$el.offsetTop
      }

    },
    methods:{
      back(){
        this.$router.go(-1)
      },
      /* 图片加载完后计算offsetTop*/
      detailImgLoad(){
        this.$refs.scroll.refresh()
        this.navOffsetTops.push(this.$refs.params.offsetTop()-44)
        this.navOffsetTops.push(this.$refs.content.offsetTop()-44)
        this.navOffsetTops.push(this.$refs.recommend.$el.offsetTop-44)
      },

      scroll(position){
         /* 判断是否显示返回顶部*/
        this.isshowBackTop(position)

        /*改变nav的动态*/
        let length = this.navOffsetTops.length
        for(let i=0;i<length;i++){
          if(this.indexChange!=i&&i<length-1 && (-position.y)>=this.navOffsetTops[i] &&
          (-position.y)<this.navOffsetTops[i+1]
          || i==length-1 && (-position.y)>=this.navOffsetTops[i])
          {
            this.indexChange = i
          }
        }

      },

      /* 点击nav 跳转到指定的位置*/
      navClick(index){
        this.$refs.scroll.scrollTo(0,-this.navOffsetTops[index],200)
      },
      /* 添加购物车*/
      addToCart(){
        const product = {}
         product.title = this.detailData.title
         product.image = this.topImages[0]
         product.desc = this.detailData.desc
         product.price = this.detailData.lowNowPrice
         product.id = this.id
         product.selected= true
         this.$store.dispatch('addCart',product).then((res)=>{
           this.$toast.show(res,2000)
         })
      }
    },

    mounted(){
      /*刷新scroll的滚动区域 */
      let refresh = debounce(this.$refs.scroll.refresh)
      this.imgLoadFunc = ()=>{
        refresh()
      }
       /* 监听全局事件*/
      this.$bus.$on('goodsImgLoad',this.imgLoadFunc)
    },
    destroyed(){
       /* 取消全局事件*/
      this.$bus.$off('goodsImgLoad',this.imgLoadFunc)
    },
    created(){
      /* console.log(this.$route.params) */
      /* 获取详情页的全部数据*/
      this.id = this.$route.params.id
      getDetailsData(this.$route.params.id).then(res=>{
        this.datas = res
        /* 获取顶部图片*/
        this.topImages = this.datas.result.itemInfo.topImages

        /* 获取商品信息*/
        this.detailData =
             new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo)

        /* 获取店铺信息*/
        this.shopData = new Shop(res.result.shopInfo)

        /* 获取详情图片*/
        this.detailInfo = res.result.detailInfo

        /* 获取商品参数信息*/
        this.detailPramas = new Pramas(res.result.itemParams.info,res.result.itemParams.rule)

        /* 获取评论信息*/
        this.detailsContent = new Content(res.result.rate)
        /* 获取推荐数据*/
        getRecommend().then(res=>{
          this.recommendData = res.data.list
        })

        /*计算组件的offsetTop */

        /* this.$nextTick(()=>{
          this.navOffsetTops.push(this.$refs.params.offsetTop())
          this.navOffsetTops.push(this.$refs.content.offsetTop())
          this.navOffsetTops.push(this.$refs.recommend.$el.offsetTop)
          console.log(this.navOffsetTops)
        }) */
      })
    }
  }
</script>

<style>
  .details{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .details-scroll{
    height: calc(100% - 1.76rem - 1.9rem);
    overflow: hidden;
  }
</style>
