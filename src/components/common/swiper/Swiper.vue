<!-- 结合rem的轮播图 -->

<template>
  <div class="banner" :style="bannerStyle">
    <div class="imglist">
      <slot name="img"></slot>
    </div>
  	<div class="cycle" v-show="isCycle">
  	</div>
  </div>
</template>

<script>
  export default {
    name: 'swiper',
    data(){
      return {}
    },
    props:{
      setCycle:{
        type:Array,
        default:[10,'pink',10]
      },
      setSwiper:{
        type:Array
      },
      isCycle:{
        type:Boolean,
        default:true
      }
    },
    updated(){
      this.autoMove()
    },
    computed:{
      bannerStyle(){
        return {width:this.setSwiper[0],height: this.setSwiper[1]}
      }
    },
    methods: {
      getStyle(obj, name) {
        if (window.getComputedStyle) {
          return getComputedStyle(obj, null)[name]
        } else {
          return obj.currentStyle[name]
        }
      },
      moveTo(obj, name, speed, target, callback) {
        clearInterval(obj.timer)
        let current = parseInt(this.getStyle(obj, name))
        if (current > target) {
          speed *= -1
        }
        obj.timer = setInterval(() => {
          let old = parseInt(this.getStyle(obj, name))
          let newValue = old + speed
          if ((speed >= 0 && old >= target) || (speed <= 0 && old <= target)) {
            newValue = target
            obj.style[name] = newValue + 'px'
            clearInterval(obj.timer)
            callback && callback()
          }
          obj.style[name] = newValue + 'px'
        }, 30)
      },
      autoMove() {
        let that = this
        let banner = document.getElementsByClassName('banner')[0]
        let imgList = document.querySelectorAll('.imglist ul')[0]
        let cycle = document.getElementsByClassName('cycle')[0]
        let imgs = imgList.children
        let img = document.querySelectorAll('.imglist ul li img')[0]
        let index = 0
        let cycles = ''
        let timer = null
        /* 通过rem计算px*/
        let target = parseInt(getComputedStyle(img).width)
        //计算ul的长度
        imgList.style.width = imgs.length * (target)+ 'px'

        //渲染圆点
        for (let i = 0; i < imgs.length - 1; i++) {
          cycles += '<span></span>\n'
        }
        cycle.innerHTML = cycles
        //设置圆点大小
        for(let i=0;i< cycle.children.length;i++){
          cycle.children[i].style.width = that.setCycle[0]
          cycle.children[i].style.height = that.setCycle[0]
          cycle.children[i].style.backgroundColor = that.setCycle[1]
          cycle.children[i].style.borderRadius = that.setCycle[2]
        }
        move()
        cycleChange()

        //圆点切换

        function cycleChange() {
          for (let i = 0; i < imgs.length - 1; i++) {
            if (i === index) {
              cycle.children[i].style.backgroundColor = 'deeppink'
            } else {
              cycle.children[i].style.backgroundColor = 'white'
            }
            if (index === imgs.length - 1) {
              cycle.children[0].style.backgroundColor = 'deeppink'
            }
          }
        }
        //点击圆点，切换图片
        for (let i = 0; i < imgs.length - 1; i++) {
          cycle.children[i].onclick = function() {
            let speed = Math.abs(index - i) * 310
            index = i
            clearInterval(timer)
            that.moveTo(imgList, 'left', speed, -target * index, () => {
              move()
            })
            cycleChange()
          }
        }

        //轮播动画
        function move() {
          timer = setInterval(() => {
            index++
            index = index % imgs.length
            cycleChange()
            if (index == 0) {
              imgList.style.left = 0
            }
            that.moveTo(imgList, 'left', 15, -target * index)
          }, 3000)
        }
      },
    },


  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .banner {
    position: relative;
    margin: 0px auto;
    overflow: hidden;
  }

  .imglist ul{
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .imglist ul li{
    float: left;
    list-style-type: none;
  }
  .cycle {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
  }

  .cycle span {
    display: inline-block;
    border-radius: 50%;
    background-color: white;
  }
</style>
