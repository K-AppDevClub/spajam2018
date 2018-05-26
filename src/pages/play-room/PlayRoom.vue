

<template>
  <ons-page>
    <navbar navType="back" backType="router" :msg="room_id"></navbar>
		<!-- <bar/> -->
    <h1> {{ user_name }} </h1>
    <v-ons-button @click="startRecording()">開始</v-ons-button>
    <v-ons-button @click="endRecording()">停止</v-ons-button>
    <br>
    <p> {{ this.rounded_score }} </p>
    <p> {{ this.sum }} </p>
    <br>
    <p> {{ this.sum + this.rounded_score }} </p>
    <!-- <graph :spectrums="cur_spectrum"></graph> -->
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import Bar from '../../components/bar/Bar'
import acceleration from '../../components/acceleration/acceleration.js'
import Chat from '../../components/chat/Chat.js'
import Sound from '../../components/sound/Sound.js'


export default {
  name: 'play-room',
  mixins: [acceleration, Chat, Sound],
  
  components: {
		Navbar,
		Bar,
	},
	data(){
		return{
		}
	},
};
</script>
