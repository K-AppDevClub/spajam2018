<style>
.board {
  background-color: rgba(204, 211, 235,1);
  width: 500px;
  height: 500px;
	position: relative;
	vertical-align: middle;
}
.nyan {
	width: 300px;
	/* position: absolute; */
}
.nyan2 {
	width: 100%;
	height: 50px;
  top: 30%;
	position: absolute;
  text-align: center;
}
</style>

<template>
	<div>
		<v-ons-row>
			<v-ons-col v-bind:style="{ background: 'rgba(255,0,0,'+ (1-((color-256)/256)) +')' }" class="board">
			<div class="nyan2">
				<img :src="image_src" v-bind:style="{ width : size + 'px' }" class="nyan">
			</div>
			</v-ons-col>
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
			image_src: require('../../../images/spanyan1.png'),
		}
	},
	computed:{
		size(){
			return (this.color>255) ? this.color-256+50 : 50;
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

