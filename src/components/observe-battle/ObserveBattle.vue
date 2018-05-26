<template>
  <div>
    <h1 :x="x">{{ x }}</h1>
    <canvas ref="canvas" width="100%" height="50%"/>
    <br>
    <input class="range" v-model="x" type="range" min="0" value="30" max="1000" step="1" v-on:change="animate">
  </div>
</template>

<script>
import anime from "animejs"

export default {
  data(){
    return {
      x: 0,
      y: 0,
      width: 32,
      height: 32,
    }
  },
  
  mounted(){
    this.imgDraw();
  },
  methods:{
    animate(){
      anime({
        targets: '.bar2',
        duration: 1500,
        elasticity: 400,
        x: this.x
      });
    },

    imgDraw(){
      var ctx = this.$refs.canvas.getContext("2d")
      var img = new Image()
      var url = URL.createObjectURL("../../../images/spanyan1.png")
      img.src = url
      ctx.drawImage(img , this.x. this.y);
    }
  }
}
</script>

<style>

</style>
