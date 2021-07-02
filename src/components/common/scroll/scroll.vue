<template>
  <div class="wrapper" ref="aaa">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    data() {
      return {
        bs: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    mounted() {
      let that = this
      this.bs = new BScroll(this.$refs.aaa, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true,
        observeDOM: true,
        mouseWheel: true
      })
      if(this.pullUpLoad){
        this.bs.on('pullingUp', () => {
          that.$emit('pullUpLoad')
        })
      }

      if(this.probeType==2||this.probeType==3){
        this.bs.on('scroll', (position) => {
          that.$emit('scroll', position)
        })
      }


    },
    methods: {
      /* 封装滚动到某个位置*/
      scrollTo(x, y, time) {
        this.bs&&this.bs.scrollTo(x, y, time)
      },
      refresh(){
        this.bs&&this.bs.refresh()
      },
      finishPullUp(){
        this.bs&&this.bs.finishPullUp()
      }
    }
  }
</script>

<style>
</style>
