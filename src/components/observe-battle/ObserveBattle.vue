<template>
  <div>
    <canvas ref="left" :width="32" :height="height" style="position:absolute top:50  left:0"/>
    <canvas ref="canvas" :width="width" :height="height" style="position:absolute top:50 left:32px"/>
    <canvas ref="right" :width="32" :height="height" style="position:absolute top:50 right:33px"/>
  </div>
</template>

<script>
import anime from "animejs"

export default {
  props: {
    x:{
      default: 0
    }
  },

  data(){
    return {
      y: 0,
      dx: [0, 30, 60, 15, 45],
      dy: [0,  0,  0, 30, 30],
      width: document.documentElement.clientWidth-96,
      height: document.documentElement.clientHeight/2,
      src: [],
      ctx: null,
      img: [],
      leftCtx: null,
      rightCtx: null,
      leftImg: null,
      leftSrc: null,
      rightImg: null,
      rightSrc: null
    }
  },

  mounted(){
    for(var i=1; i<6; i++){
      this.src[i-1] =  require("../../../images/spanyan" + i + ".png")
    }
    this.leftSrc = require("../../../images/nekojarashi.png")
    this.rightSrc = require("../../../images/rNekojarashi.png")
    this.InituialSetting()
    this.imgDraw()
    this.animate()
  },

  methods:{
    animate(){
      anime({
        targets: this.$refs.canvas,
        translateY: 25,
        direction: 'alternate',
        loop: true
      });
      anime({
        targets: this.$refs.left,
        translateY: 10,
        direction: 'reverse',
        loop: true
      });
      anime({
        targets: this.$refs.right,
        translateY: 10,
        direction: 'reverse',
        loop: true
      });
      anime.speed = 2
    },

    InituialSetting(){
      this.ctx = this.$refs.canvas.getContext("2d");
      for(var i=0; i<5; i++){
        this.img[i] = new Image();
        this.img[i].src = this.src[i]
      }
      this.leftCtx = this.$refs.left.getContext("2d")
      this.rightCtx = this.$refs.right.getContext("2d")
      this.leftImg = new Image();
      this.rightImg = new Image();
      this.leftImg.src = this.leftSrc;
      this.rightImg.src = this.rightSrc;
    },

    imgDraw(){
      console.log(this.ctx)
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.leftCtx.clearRect(0,0,this.width, this.height);
      this.rightCtx.clearRect(0,0,this.width, this.height);
      console.log(this.spax)
      for(var i=0; i<5; i++){
        this.ctx.drawImage(this.img[i] , this.spax+this.dx[i], this.y+this.dy[i], 32, 48);
      }
      this.leftCtx.drawImage(this.leftImg, 0, 0, 32, 48);
      this.rightCtx.drawImage(this.rightImg, 0, 0, 32, 48);
    }
  },
  watch: {
    x: function(){
      this.imgDraw()
    }
  },

  computed: {
    spax(){
      return this.x * (this.width-96) / 512
    },
  }
}
</script>

<style>

</style>
