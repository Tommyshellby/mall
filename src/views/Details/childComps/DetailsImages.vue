<template>
  <div class="details_image">
    <p class="details_image_title">{{detailInfo.desc}}</p>
    <div class="details_image_main" v-for="(item,index) in detailInfo.detailImage" :key="index">
      <p>{{item.key}}</p>
      <img v-for="img in item.list" v-lazy="img" alt="" @load="detailImgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailsImage',
    data() {
      return {
        imgCounter: 0,
        imglength: 0,
      }
    },
    props: {
      detailInfo: {}
    },
    methods: {
      detailImgLoad() {
        if (++this.imgCounter === this.imglength)
          this.$emit('detailImgLoad')
      }
    },
    watch: {
      detailInfo: function() {

        for (let i = 0; i < this.detailInfo.detailImage.length; i++) {
          this.imglength += this.detailInfo.detailImage[i].list.length
        }


      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  .details_image {
    width: 15rem;
    margin: 0 auto;
  }

  .details_image_title {
    font-size: 0.64rem;
    padding: 0.3rem;
    color: orange;
  }

  .details_image_main p {
    padding: 0.3rem;
    font-size: 0.8rem;
    background-color: aquamarine;
  }

  .details_image_main img {
    width: 100%;
    vertical-align: middle;
  }
</style>
