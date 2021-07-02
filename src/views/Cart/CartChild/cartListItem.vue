<template>
    <div class="list">
      <button type="button" class="btn" @click="btnClick" :class="{selected:item.selected}"></button>
      <img :src="item.image" alt="" @load="cartImgLoad">
      <p>{{item.title}}</p>
      <span class="price">￥{{item.price}}</span>
      <span class="counter">x{{item.counter}}</span>
    </div>
</template>

<script>
  export default{
    name:'cartListItem',
    data(){
      return {
      }
    },
    props:{
      item:{
        type:Object,
        default:()=>{
          return {}
        }
      }
    },
    methods:{
      cartImgLoad(){
        this.$bus.$emit('cartImgLoad')
      },
      btnClick(){
        this.item.selected = !this.item.selected
      }
    }
  }
</script>

<style scoped>
  .list{
    position: relative;
    width: 100%;
    height: 6rem;
    overflow: hidden;
    margin-bottom: 0.2rem;
    padding: 0.2rem;
    border-bottom: 0.02rem solid lightgray;
  }
  .list img{
    float: left;
    width: 25.5%;
    margin-left: 1.6rem;
    margin-right: 0.3rem;
  }
  .btn{
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    border: 1px solid gray;
    position:absolute;
    left: 0.4rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .list p{
    font-size: 0.6rem;
    margin-left: 0.2rem;
    padding-left: 0.3rem;
  }
  .price{
    position: absolute;
    top: 80%;
    left: 6rem;
    color: deeppink;
    font-size: 0.7rem;
  }
  .counter{
    position: absolute;
    top: 80%;
    right: 0.4rem;
    font-size: 0.7rem;
  }
  .selected{
    background-color: #FF1493;
  }
</style>
