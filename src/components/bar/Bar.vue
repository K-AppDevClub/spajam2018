<style>
.board {
  background-color: rgb(204, 211, 235);
  width: 500px;
  height: 500px;
}
</style>

<template>
	<div>
		<v-ons-row>
			<v-ons-col v-bind:style="{ background: 'rgb('+ red +','+ green +',' + blue + ')' }" class="board"></v-ons-col>
		</v-ons-row>
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
	},
	watch:{
		color: function(val){
			console.log(val)
		}
	}
}
</script>

