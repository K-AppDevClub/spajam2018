<style lang='scss' scoped>
.page-title {
  text-align: center;
}
.body {
  margin-top: 50px;
}
</style>

<template>
  <v-ons-page>
    <navbar navType="blank" msg="ShakeLoud"></navbar>
    <ons-card>
      <v-ons-list-item>
        <span style="margin-right:15px;">ユーザー名: </span>
        <v-ons-input float v-model="user_name"></v-ons-input>
      </v-ons-list-item>
    </ons-card>
    <ons-card>
      <h1>ルームに参加</h1>
      <v-ons-list-item>
        <span style="margin-right:15px;">ルームid: </span>
        <v-ons-input float v-model="join_id"></v-ons-input>
      </v-ons-list-item>
      <v-ons-button style="margin: 6px 0" @click="joinGo()">はいる！</v-ons-button>
    </ons-card>
    <ons-card>
      <h1>ルームを作成</h1>
      <v-ons-button style="margin: 6px 0" @click="makeRoom()">つくる！</v-ons-button>
    </ons-card>
     <ons-card>
      <h1>ルームを観戦</h1>
      <v-ons-list-item>
        <span style="margin-right:15px;">ルームid: </span>
        <v-ons-input float v-model="join_id"></v-ons-input>
      </v-ons-list-item>
      <v-ons-button style="margin: 6px 0" @click="watchRoom()">見る！</v-ons-button>
    </ons-card>
  </v-ons-page>
</template>

<script>
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import CreatePlan from '../../pages/create-plan/CreatePlan';
import PlayRoom from '../../pages/play-room/PlayRoom';
import RegionPage from '../../pages/region/Region';
import DetailPlan from '../../pages/detail-plan/DetailPlan';
import Navbar from '../../components/navbar/Navbar';
import ObserveBattle from '../../components/observe-battle/ObserveBattle'
import Bar from '../../components/bar/Bar'
import Viewing from '../../pages/viewing/Viewing'

export default {
  name: 'posts-page',
  components: {
    LoadingIndicator,
    ObserveBattle,
    Navbar,
    Bar,
  },
  methods: {
    // goRoom(res) {
    //   localStorage.setItem('Name' , this.user_name);
    //   this.$router.push({ name: 'play-room' ,params: { 
    //     room_id: res.data.id, 
    //     user_name:this.user_name
    //   } })
    // },
    joinGo(){
      localStorage.setItem('Name' , this.user_name);
      this.$router.push({ name: 'play-room' ,params: { 
        room_id: this.join_id, 
        user_name:this.user_name
      } })
    },

    makeRoom(){
      this.$router.push({ name: 'play-room' ,params: { 
        room_id: Math.floor( Math.random() * (10000000) ), 
        user_name:this.user_name
      } })
    },
    watchRoom(){
      this.$router.push({ name: 'viewing' ,params: { 
        room_id: this.join_id, 
      } })
    },
    
  },
  created() {
  },
  data() {
    return {
      makeurl:`https://k-appdev.com:3010/rooms`, 
      x: 0,
      //joinurl:`https://k-appdev.com:3010/rooms/${join_id}`,
      room_id: '',
      join_id: '',
      user_name: localStorage.getItem('Name'),
      strage_name:'',
    };
  },
};
</script>
