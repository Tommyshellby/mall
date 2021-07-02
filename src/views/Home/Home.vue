<template>
  <div id="home">

    <NavBar class="home_nav">
      <div slot="nav_main" class="context">购物街</div>
    </NavBar>

    <tab-control :titles="['新品','爆款','夏季']"
                  @tabClick='tabClick'
                  ref="tabControl2"
                  class="tabControl"
                  v-show='isTabcontrolFixed'>
    </tab-control>

    <Scroll
            class="scroll"
            @pullUpLoad='pullUpLoad'
            ref="scroll"
            :probe-type="3"
            @scroll='scroll'
            :pullUpLoad="true">
      <MainSwiper :imgs="banners" class="swiper" @swiperImgLoad='swiperImgLoad'></MainSwiper>
      <Recomand :recomands="recommend"></Recomand>
      <porpular></porpular>

      <tab-control :titles="['新品','爆款','夏季']"
                    @tabClick='tabClick'
                    ref="tabControl1"
                    >
      </tab-control>

      <showGoods :goods="goods[type].list" @pullUpLoad='pullUpLoad'></showGoods>
    </Scroll>

    <backTop @click.native="backTopClick" v-show="isShowBackTop"></backTop>
  </div>
</template>

<script>
  import {
    getMultidata,
    getHomeGoods
  } from 'network/home.js'
  import MainSwiper from 'components/content/mainSwiper/MainSwiper.vue'
  import Recomand from './HomeChild/recomand.vue'
  import porpular from './HomeChild/feature.vue'

  import NavBar from 'components/common/navbar/Navbar.vue'
  import tabControl from 'components/common/tabControl/Tabcontrol.vue'
  import Scroll from 'components/common/scroll/scroll.vue'

  import showGoods from 'components/content/showGoods/showGoods.vue'

  import {debounce} from 'common/utils.js'
  import {imgLoadmixin,backTopMixin} from 'common/misxins.js'


  export default {
    name: 'Home',
    components: {
      MainSwiper,
      Recomand,
      porpular,
      NavBar,
      tabControl,
      showGoods,
      Scroll
    },
    data() {
      return {
        banners: [],
        recommend: null,
        keywords: null,
        dkeyword: null,
        goods: {
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          }
        },
        type: 'pop',
        tabControlTop:0,
        isTabcontrolFixed:false,
        currentPosition:0,
        isShowBackTop:false
      }
    },
    created() {
      let that = this
      getMultidata().then(function(res) {
        that.banners = res.data.banner.list
        that.recommend = res.data.recommend.list
        that.keywords = res.data.keywords
        that.dkeyword = res.data.dKeyword
      })
      this.getHomeGood('new')
      this.getHomeGood('sell')
      this.getHomeGood('pop')
    },
    mounted(){

    },
    /* 混入*/
    mixins:[imgLoadmixin,backTopMixin],
    activated(){
      /* 刷新一下 回到原来位置*/
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.currentPosition)
      /*刷新scroll的滚动区域 */
      let refresh = debounce(this.$refs.scroll.refresh,50)
      this.imgLoadFunc = ()=>{
        refresh()
      }
      /* 监听全局事件*/
      this.$bus.$on('goodsImgLoad',this.imgLoadFunc)

    },
    deactivated(){
      this.currentPosition = this.$refs.scroll.bs.y
      /* 取消全局事件*/
      this.$bus.$off('goodsImgLoad',this.imgLoadFunc)
    },
    methods: {
      getHomeGood(type) {
        let page = this.goods[type].page + 1
        return getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      },
      pullUpLoad() {
        this.getHomeGood(this.type).then((res)=>{
          /* this.$refs.scroll.refresh() */
          this.$refs.scroll.finishPullUp()

        }).catch(()=>{
          console.log('没有更多啦')
        })
      },
      tabClick(index) {
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
        if (index == 0) {
          this.type = 'pop'
        } else if (index == 1) {
          this.type = 'sell'
        } else if (index == 2) {
          this.type = 'new'
        }
      },
      backTopClick(){
        this.$refs.scroll.scrollTo(0,0,300)
      },
      scroll(position){
        /* 判断是否显示返回顶部*/
        this.isshowBackTop(position)
       /* 决定tabcontrol是否吸顶*/
       this.isTabcontrolFixed = Math.abs(position.y)>this.tabControlTop-49
      },
      swiperImgLoad(){
        this.tabControlTop = this.$refs.tabControl1.$el.offsetTop
      }
    }
  }
</script>

<style>
  #home{
    height: 100vh;
  }
  .home_nav {
    background-color: hotpink;
    color: white;
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .context {
    font-size: 0.8rem;
  }

  .scroll {
    height: calc(100% - 1.92rem - 1.76rem);
    margin: 0 auto;
    overflow: hidden;
  }
  .tabControl{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
  }
</style>
