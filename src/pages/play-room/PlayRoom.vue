<template>
  <ons-page>
    <navbar navType="back" backType="router" :msg="room_id"></navbar>
    <h1> {{ user_name }} </h1>
    <v-ons-button @click="startRecording()">開始</v-ons-button>
    <v-ons-button @click="endRecording()">停止</v-ons-button>
    <v-ons-button @click="goResult()">（仮）結果</v-ons-button>

    <br>
    <p> {{ this.rounded_score }} </p>
    <p> {{ this.sum }} </p><br>
    <!-- <v-ons-input float v-model="this.sum"></v-ons-input> -->
    <p> {{ this.rounded_score + this.sum }} </p>
    <!-- <graph :spectrums="cur_spectrum"></graph> -->
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import acceleration from '../../components/acceleration/acceleration.js'
import Chat from '../../components/chat/Chat.js'
import Sound from '../../components/sound/Sound.js'


export default {
  name: 'play-room',
  mixins: [acceleration, Chat, Sound],
  
  components: {
    Navbar,
  },
  creadted() {
    //this.total_score = this.rounded_score + this.sum;
  },

  methods: {
    goResult() {
      this.total_score = this.rounded_score + this.sum
      this.$router.push({ name: 'result' ,params: { 
        //score: 1,
        player1:this.player1,
        player2:this.player2,
        total_score1: this.total_score, 
        total_score2: this.total_score2,
        sound_score1: this.sound_score1,
        sound_score2: this.sound_score2,
        shake_score1: this.shake_score1,
        shake_score2: this.shake_score2,


      } })
    },
  },
	data(){
		return{
      // plan: {
      //   player_name:'Noname',
      //   total_score:0,
      //   sound_score:0,
      //   shake_score:0,
      // },
      total_score: 0,
      total_score2: 0,
      player1:'hamae',
      player2:'yaise',
      sound_score1:100,
      sound_score2:200,
      shake_score1:800,
      shake_score2:700,

      
      //total_score: this.rounded_score + this.sum,
		}
	},
};
</script>
