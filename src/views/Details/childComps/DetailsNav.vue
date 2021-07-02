<template>
  <nav-bar class="details_nav">
    <div slot='nav_left' class="back" @click="back"> < </div>
    <div slot="nav_main" class="title">
      <div v-for="(title,index) in titles"
                        class="title_item"
                        @click='navClick(index)'
                        :class='{active:index===currentIndex}'>
      {{title}}</div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/Navbar.vue'

  export default {
    name:"DetailsNav",
    data(){
      return {
        currentIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default:function(){
          return []
        },
      },
      indexChange:0
    },
    methods:{
      navClick(index){
        this.currentIndex = index
        this.$emit('navClick',index)
      },
      back(){
        this.$router.go(-1)
      }
    },
    components:{
      NavBar
    },
    watch:{
      indexChange:function(){
        this.currentIndex = this.indexChange
      }
    }
  }
</script>

<style scoped>
  .details_nav{
    margin: 0 auto;
  }
  .title{
    display: flex;
    font-size: 0.5rem;
  }
  .title_item{
    flex: 1;
    cursor: pointer;
  }
  .back{
    cursor: pointer;
    padding-left: 0.5rem;
    line-height: 1.8rem;
  }
  .active{
    color: #FF69B4;
  }
</style>
