<template>
	<div class="tab_item" @click="itemClick">
		<div v-show="!isActive" class="item_icon">
			<slot name="item_icon"></slot>
		</div>

		<div v-show="isActive" class="item_icon">
			<slot name="item_icon_active"></slot>
		</div>

		<div :style="isActive?{color:activeColor}:{}">
			<slot name="item_text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TabItem',
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'skyblue'
			}
		},
		data(){
			return {

			}
		},
		computed:{
			isActive(){
				return this.path === this.$route.path
			}
		},
		methods:{
			itemClick(){
				this.$router.push(this.path).catch(()=>'')
			}
		}
	}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .tab_item{
  	flex: 1;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
    line-height: 0.98rem;
    font-size: 0.6rem;
  }
  .item_icon,span{
  	flex: 1;
  }
  .item_icon img{
  	width: 0.84rem;
  }
</style>
