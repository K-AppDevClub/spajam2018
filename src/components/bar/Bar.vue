<style>
.board {
  margin: 50px;
  background-color: rgb(204, 211, 235);
  width: 500px;
  height: 500px;
}
</style>

<template>
	<div>
  	<div v-bind:style="{ background: 'rgb('+ red +','+ green +',' + blue + ')' }" class="board"></div>
    <!-- <input class="range" v-model="color" type="range" min="0" value="30" max="512" step="1" v-on:change="change"> -->
		<!-- <p>{{ color }}</p>		 -->
	</div>
</template>

<script>
export default {
	props:{
		color:{
			default: 100
		},
	},
	data(){
		return{
		// color: 100,
		// r: 0,
		// g: 0,
		// b: 0,
		}
	},
	computed:{
		red(){
			return (this.color<255) ? 255-this.color : 0;
		},
		green(){
			return 255-Math.abs(255-this.color);
		},
		blue(){
			return (this.color>255) ? this.color-255 : 0;
		},
	},
	methods:{
		// change(){
		// 	var i = this.color;
		// 	this.r = (i<255) ? 255-i : 0;
		// 	this.g = 255-Math.abs(255-i);
		// 	this.b = (i>255) ? i-255 : 0;
		// },
	},
}
</script>

