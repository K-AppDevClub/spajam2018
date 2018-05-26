<template>
  <ons-page>
    <navbar navType="back" backType="router" :msg="room_id"></navbar>
    <h1> {{ user_name }}:{{ my_score }}</h1>
    <h1> {{ enemy_name }}: {{ enemy_score }}</h1>
    <v-ons-button @click="startBeep()">beep</v-ons-button>
    <br>
    <v-ons-modal :visible="!isPlaying">
      <p v-if="isReady" style="text-align: center; font-size:50px">
        {{countdown_num}}
      </p>  
      <p v-else style="text-align: center">
        対戦者を待っています...<br><br>
        ルームID：{{room_id}}<br><br>
        <v-ons-progress-circular indeterminate></v-ons-progress-circular>
        <br><br><br><br>
        <v-ons-button @click="$router.go(-1)" >タップしてキャンセル</v-ons-button>
      </p>
    </v-ons-modal>
    <v-ons-button @click="goResult()">（仮）結果</v-ons-button>
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import Bar from '../../components/bar/Bar'
import acceleration from '../../components/acceleration/acceleration.js'
import Chat from '../../components/chat/Chat.js'
import Sound from '../../components/sound/Sound.js'
import Beep from '../../components/sound/beep.js'

export default {
  name: 'play-room',
  mixins: [acceleration, Chat, Sound, Beep],
  
  components: {
		Navbar,
		Bar,
	},
	data(){
		return{
      modalVisible: true,
      countdown_timer: null,
      countdown_num: 3,

      total_score: 0,
      total_score2: 0,
      player1:'hamae',
      player2:'yaise',
      sound_score1:100,
      sound_score2:200,
      shake_score1:800,
      shake_score2:700,
		}
  },
  methods: {
    showModal() {
      this.modalVisible = true;
      clearTimeout(this.timeoutID);
      this.timeoutID = setTimeout(() => this.modalVisible = false, 2000);
    },
    startGame() {
      this.isPlaying = true;
      this.isGetAcceleration = true;
      this.startRecording();
    },
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
  watch: {
    isReady: function(val){
      if(this.isReady){
        this.countdown_timer = setInterval(()=>{
          this.countdown_num -= 1;
          if(this.countdown_num<=0){
            clearInterval(this.countdown_timer);
            this.startGame();
          }
        },1000);
      }
    },
  }
};
</script>