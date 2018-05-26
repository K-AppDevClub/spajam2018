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
        <v-ons-progress-circular indeterminate></v-ons-progress-circular>
        <br><br><br><br>
        <v-ons-button @click="$router.go(-1)" >タップしてキャンセル</v-ons-button>
      </p>
    </v-ons-modal>
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