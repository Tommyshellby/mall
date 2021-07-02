<template>
  <a @click="moveToDetails">
    <div class="img">
      <img v-lazy="showImage" alt="" @load="goodsImgLoad">
    </div>
    <p>{{goodsItem.title}}</p>
    <p>
      <span>￥{{goodsItem.price}}</span>
      <span v-if="goodsItem.popularStar">收藏：{{goodsItem.popularStar}}</span>
    </p>
  </a>
</template>
<script>
  export default {
    name: 'showGoodsItem',
    props: {
      goodsItem: {
        type: Object,
      }
    },
    computed:{
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
      goodsImgLoad(){
        this.$bus.$emit('goodsImgLoad')
      },
      moveToDetails(){
        this.$router.push('/details/'+this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  a {
    box-sizing: border-box;
    display: inline-block;
    padding: 0.3rem;
    width: 50%;
    height: 13rem;
  }

  .img {
    height: 85%;
    width: 100%;
    border-radius: 0.2rem;
    overflow: hidden;
  }

  .img img {
    width: 100%;
  }

  p {
    font-size: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin-top: 0.1rem;
    padding: 0 0.1rem;
  }

  span {
    margin-right: 5px;
  }

  p span:first-child {
    color: red;
  }

  p span:last-child {
    font-size: 0.3rem;
  }
</style>
