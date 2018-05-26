<template>
  <ons-page>
    <navbar navType="back" backType="router" :msg="room_id"></navbar>
    <v-ons-card>
      <v-ons-row>
        <v-ons-col>
          <h3 style="text-align:center;"> {{ user_name }}:{{ my_score }}</h3>
        </v-ons-col>
        <v-ons-col>
          <h3 style="text-align:center;"> {{ enemy_name }}: {{ enemy_score }}</h3>
        </v-ons-col>
      </v-ons-row>
    </v-ons-card>
    <ScoreColor v-bind:color="judgePoint"/>
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
import ScoreColor from '../../components/bar/Bar'
import acceleration from '../../components/acceleration/acceleration.js'
import Chat from '../../components/chat/Chat.js'
import Sound from '../../components/sound/Sound.js'
import Beep from '../../components/sound/beep.js'

export default {
  name: 'play-room',
  mixins: [acceleration, Chat, Sound, Beep],
  
  components: {
    Navbar,
    ScoreColor,
	},
	data(){
		return{
      modalVisible: true,
      countdown_timer: null,
      countdown_num: 3,
      judgeCounter: 0,
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
      setTimeout(()=>{
        this.melody.stop();
      },500)
    },
    stopGame() {
      this.isPlaying = false;
      this.isGetAcceleration = false;
      this.endRecording();
      this.finishBeep();
    },
  },
  watch: {
    isReady: function(val){
      console.log("hogehoge");
      this.startBeep();
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