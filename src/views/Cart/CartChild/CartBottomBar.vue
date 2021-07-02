<template>
  <div class="cart_bottom">
    <div class="select_all">
      <button @click="totalClick" :class="{all:isSelectAll}"></button>
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计:￥{{total}}</span>
    </div>
    <div class="buy">
      <span @click="toBuy">去结算({{checkLength}})</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'CartBottomBar',
    data(){
      return {
        isAll:true
      }
    },
    computed:{
      total(){
        let sum = 0
        this.$store.state.cartList.forEach((item)=>{
          if(item.selected){
            sum += item.price*item.counter
          }
        })
        return sum.toFixed(2)
      },
      isSelectAll(){
        if(this.$store.state.cartList.length===0){
          return false
        }
        return this.$store.state.cartList.every((item)=>item.selected)
      },
      checkLength(){
        return this.$store.state.cartList.filter((item)=>item.selected).length
      }
    },
    methods:{
      totalClick(){
        this.$store.state.cartList.forEach((item)=>item.selected = this.isAll)
        this.isAll = !this.isAll
      },
      toBuy(){
        if(this.checkLength === 0){
          this.$toast.show('请添加商品',1500)
        }
      }
    },

  }
</script>

<style scoped>
  .cart_bottom{
    width: 15rem;
    height: 1.5rem;
    margin: 0 auto;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 2rem;
    display: flex;
    background-color: gainsboro;
    font-size: 0.65rem;
  }
  .cart_bottom div{
    text-align: center;
    line-height: 1.5rem;
    flex: 1;
  }
  .select_all button{
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    border: 1px solid darkgray;
    vertical-align: middle;
    margin-right: 0.2rem;
  }
  .buy{
    background-color: #FF0000;
    color: white;
  }
  .all{
    background-color: hotpink;
  }
</style>
