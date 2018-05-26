<style>
.board {
  background-color: rgba(204, 211, 235,1);
  width: 500px;
  height: 500px;
	position: relative;
}
.nyan {
	width: 50px;
	/* position: absolute; */
}
.nyan2 {
	width: 100%;
	height: 500px;
	text-align: center;
	vertical-align: middle;
	/* position: absolute; */
	margin: auto;
	/* margin: auto, auto; */
}
</style>

<template>
	<div>
		<v-ons-row>
			<v-ons-col v-bind:style="{ background: 'rgba(255,0,0,'+ (1-((color-80)/20)) +')' }" class="board">
			<div class="nyan2">
				<img :src="image_src" class="nyan">
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

