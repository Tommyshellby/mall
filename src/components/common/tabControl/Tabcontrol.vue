<template>
  <div class="tabcontrol" :class="{isfixed:fixed}">
    <div v-for="(item,index) in titles" :class="{active:index === currentIndex}"
    class="tabcontrol_item" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'tabControl',
    data(){
      return {
        currentIndex:0,
        fixed:false
      }
    },

    props:{
      titles:{
        type:Array
      }
    },
    mounted(){
      this.sticky()
    },
    methods:{
      tabClick(index){
        this.currentIndex = index
        this.$emit('tabClick',index)
      },
      sticky(){
        let tab = document.getElementsByClassName('tabcontrol')[0]
        window.onscroll=function(){
          if(document.documentElement.scrollTop>=tab.offsetTop){
            tab.style.position = 'fixed'
            tab.style.top = '1.76rem'
            this.fixed = true
          }else{
            tab.style.position = 'relative'
            tab.style.top = '0px'
            this.fixed = false
          }
        }
      }
    },
  }
</script>

<style>
  .tabcontrol{
    width: 15rem;
    margin: 0 auto;
    height: 1.6rem;
    line-height: 1.6rem;
    display: flex;
    background-color: white;

  }
  .isfixed{
    left: 50%;
    transform: translateX(-50%);
    background-color: #FF69B4 !important;
  }
  .tabcontrol_item{
    flex: 1;
    font-size: 0.7rem;
    text-align: center;
  }
  .active{
    color: pink;
    border-bottom: 0.04rem solid hotpink;
  }
</style>
