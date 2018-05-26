<style>
.bar {
  background: red;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}
</style>

<template>
	<div id="app" style="width=200 height=500 background=black">
    <div v-bind:style="{ height: height * -1 + 'px' }" class="bar" style="display: inline-block"></div>
		<br>
    <input class="range" v-model="height" type="range" min="0" value="30" max="1000" step="1">
	</div>
</template>

<script>
export default {
	data(){
		return{
		// width: 500,
		height: 500,			
		}
	},
	methods:{
		animate(){
			this.$anime({
				targets: '.bar2',
				duration: 1000,
				// easing: 'easeInSine',
				elasticity: 200,
				// width: this.width
				height: this.height
			});
		}
	}
}
</script>

