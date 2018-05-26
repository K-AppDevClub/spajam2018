<template>
  <div>
    <h1 :x="x">{{ x }}</h1>
    <button @click="imgDraw">hoge</button>
    <canvas ref="canvas" :width="500" :height="500"/>
    <br>
    <input class="range" v-model="x" type="range" min="0" value="30" max="1000" step="1">

  </div>
</template>

<script>
import anime from "animejs"

export default {
  data(){
    return {
      x: 0,
      y: 0,
      width: 200,
      height: 200,
      src: require("../../../images/spanyan1.png"),
      ctx: null,
      img: new Image()
    }
  },
  mounted(){
    this.InituialSetting
  },

  methods:{
    InituialSetting(){
      this.ctx = this.$refs.canvas.getContext("2d");
      this.img = this.src
      
    },

    imgDraw(){
      this.ctx.drawImage(this.img , this.x, this.y, 32, 32);
      this.x += 1;
    }
  }
}
</script>

<style>

</style>
