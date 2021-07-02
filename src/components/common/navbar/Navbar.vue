<template>
  <nav class="nav">
    <div class="nav_left">
      <slot name="nav_left"></slot>
    </div>
    <div class="nav_main">
      <slot name="nav_main"></slot>
    </div>
    <div class="nav_right">
      <slot name="nav_right"></slot>
    </div>
  </nav>
</template>

<script>
  export default {
    name:'NavBar'
  }
</script>

<style>
  .nav{
    display: flex;
    width: 15rem;
    height: 1.76rem;
    box-shadow: 0 0.02rem 0.1rem 0 gray;
  }
  .nav_left,.nav_right{
    width: 20%;
    height: 100%;
  }
  .nav_main{
    flex: 1;
    height: 1.76rem;
    line-height: 1.76rem;
    text-align: center;
  }
</style>
