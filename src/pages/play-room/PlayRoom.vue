<template>
  <ons-page>
    <navbar navType="back" backType="router" :msg="room_id"></navbar>
    <h1> {{ user_name }}:{{ sum }}</h1>
    <h1> {{ enemy_name }}: {{ enemy_score }}</h1>
    <v-ons-button @click="startRecording()">開始</v-ons-button>
    <v-ons-button @click="endRecording()">停止</v-ons-button>
    <br>
    <p> {{ this.rounded_score }} </p>
    <v-ons-modal :visible="modalVisible" @click="$router.go(-1)">
      <p style="text-align: center">
        対戦者を待っています... <v-ons-icon icon="fa-spinner" spin></v-ons-icon>
        <br><br><br><br>
        タップしてキャンセル
      </p>
    </v-ons-modal>
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
	data(){
		return{
      modalVisible: true,
		}
  },
  methods: {
    showModal() {
      this.modalVisible = true;
      clearTimeout(this.timeoutID);
      this.timeoutID = setTimeout(() => this.modalVisible = false, 2000);
    }
  }
};
</script>
