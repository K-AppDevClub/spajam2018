<style>
.bar {
    background: red;
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}
</style>

<template>
	<div id="app">
    	<div v-bind:style="{ height: height + 'px' }" class="bar" style="display: inline-block"></div>
    	<div class="bar bar2" style="display: inline-block"></div>
			<br>
    	<input class="range" v-model="height" type="range" min="0" value="30" max="1000" step="1" v-on:change="animate">
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

