<template>
  <div class="toast" v-show="isShow">
    <span>{{msg}}</span>
  </div>
</template>

<script>
  export default{
    name:'Toast',
    data(){
      return {
        msg:'',
        isShow:false
      }
    },
    methods:{
      show(msg='我是弹窗',duration=1500){
        this.msg = msg
        this.isShow = true
        setTimeout(()=>{
          this.isShow = false
        },duration)
      }
    }
  }
</script>

<style>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,0.6);
    color: white;
    width: 60%;
    height: 1.2rem;
    font-size: 0.7rem;
    text-align: center;
    animation: fate 1.5s linear forwards;
    z-index: 999;
    border-radius: 0.4rem;
    padding: 0.3rem;
  }
  @keyframes fate{
    from{
      opacity: 1;
    }
    to{
      opacity: 0;
    }
  }
</style>
