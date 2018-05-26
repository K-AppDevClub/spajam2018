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
    <navbar navType="blank" msg="シェイク"></navbar>
    <ons-card>
      <v-ons-list-item>
        <span style="margin-right:15px;">ユーザー名: </span>
        <v-ons-input placeholder="（例：ほげほげ）" float v-model="user_name"></v-ons-input>
      </v-ons-list-item>
    </ons-card>
    <ons-card>
      <h1>ルームに参加</h1>
      <v-ons-list-item>
        <span style="margin-right:15px;">ルームid: </span>
        <v-ons-input placeholder="（例：なんでも）" float v-model="join_id"></v-ons-input>
      </v-ons-list-item>
      <v-ons-button style="margin: 6px 0" @click="joinGo()">はいる！</v-ons-button>
    </ons-card>
    <ons-card>
      <h1>ルームを作成</h1>
      <v-ons-button style="margin: 6px 0" @click="makeRoom()">つくる！</v-ons-button>
    </ons-card>
    <!-- <v-ons-fab @click="makeRoom()" style="position:fixed;" modifier="material" position="bottom right" >
      <v-ons-icon icon="md-plus"></v-ons-icon>
    </v-ons-fab> -->
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

export default {
  name: 'posts-page',
  components: {
    LoadingIndicator,
    ObserveBattle,
    Navbar,
  },
  methods: {
    goRoom(res) {
      localStorage.setItem('Name' , this.user_name);
      this.$router.push({ name: 'play-room' ,params: { 
        room_id: res.data.id, 
        user_name:this.user_name
      } })
    },
    joinGo(){
      this.axios.get(this.makeurl,{id:{}})
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('Name' , this.user_name);
        this.$router.push({ name: 'play-room' ,params: { 
          room_id: this.join_id, 
          user_name:this.user_name
        } })
      })
      .catch(err => {
        this.$ons.notification.alert('ルームが存在しません');
      });
    },

    makeRoom(){
      this.axios.post(this.makeurl,{room:{}})
      .then(room_data => {
        console.log(room_data)
        this.goRoom(room_data)
      })
      .catch(err => {
        this.$ons.notification.alert('そのルーム名はすでに使われています');
      });
 
    },
    
  },
  created() {
  },
  data() {
    return {
      makeurl:`https://k-appdev.com:3010/rooms`, 
      //joinurl:`https://k-appdev.com:3010/rooms/${join_id}`,
      room_id: '',
      join_id: '',
      user_name: localStorage.getItem('Name'),
      strage_name:''
    };
  },
};
</script>
