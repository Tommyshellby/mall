<template>
	<nav id="tabbar">
		<slot></slot>
	</nav>
</template>

<script>
	export default {
		name:'TaBbar'
	}
</script>

<style>
  *{
    box-sizing: border-box;
  }
	#tabbar{
    width: 15rem;
		height: 1.92rem;
		background-color: snow;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
    box-shadow: 0px -1px 7px 0px gray;
	}
</style>
