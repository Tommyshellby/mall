<template>
  <div class="details_content">
    <p class="content_counter">用户评论：{{detailsContent.counter}} <span>更多> </span></p>
    <div class="details_content_user" v-for="item in detailsContent.allUser">
      <div class="user_info">
        <img :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>

      <div class="good_style">
        <span>{{item.created | showDate}}
        </span>
        <span>{{item.style}}</span>
      </div>

      <div class="user_content">
        <p></p>
        <p>{{item.content}}</p>
      </div>
      <div class="content_img">
        <div v-for="item in item.images" >
          <img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {formatDate} from 'common/utils.js'
  export default{
    name:'DetailsContent',
    props:{
      detailsContent:{
        type:Object
      }
    },
    methods:{
      offsetTop(){
        return document.getElementsByClassName('details_content')[0].offsetTop
      }
    },
    filters:{
      showDate(value){
        /* 将时间戳转换为时间对象*/
        const date = new Date(value*1000)
        /* 格式化时间*/
        return formatDate(date,'yyyy/MM/dd hh:mm')
      }
    }
  }

</script>

<style scoped>
  .details_content{
    width: 15rem;
    margin: 0 auto;
    padding: 0.3rem;
  }
  .content_counter{
    font-size: 0.64rem;
    border-bottom: 0.02rem solid gainsboro;
    border-top: 0.02rem solid gainsboro;
    height: 1.6rem;
    line-height: 1.6rem;
  }
  .content_counter span{
    display: inline-block;
    margin-left: 8rem;
  }
  .user_info{
    margin-top: 0.3rem;
  }
  .user_info img{
    width: 2rem;
    vertical-align: middle;
  }
  .user_info span{
    display: inline-block;
    margin-left: 0.4rem;
    font-size: 0.6rem;
  }
  .good_style{
    font-size: 0.2rem;
    color: darkgrey;
  }
  .good_style span{
    margin-right: 0.2rem;
  }
  .user_content{
    margin-top: 0.4rem;
    font-size: 0.64rem;
  }
  .content_img{
    width: 100%;
  }
  .content_img div{
    display: inline-block;
    margin-top: 0.4rem;
    width: 46%;
    height: 5.5rem;
    overflow: hidden;
    margin-right: 0.4rem;
  }
  .content_img div img{
    width: 100%;
  }
</style>
