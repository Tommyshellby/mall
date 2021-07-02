export const imgLoadmixin = {
  date(){
    return {
      imgLoadFunc:{}
    }
  },
  mounted(){
    
  }
}

import backTop from 'components/content/backTop/backTop.vue'
export const backTopMixin = {
  date(){
    return {
      isShowBackTop:false,
    }
  },
  components:{
    backTop
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0,200)
    },
    isshowBackTop(position){
      this.isShowBackTop = (-position.y)>500
    }
  }

}
