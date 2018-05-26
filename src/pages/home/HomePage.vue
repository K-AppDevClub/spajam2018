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
      <h1>ユーザー名入力</h1>
      <v-ons-list-item>
        <span style="margin-right:15px;">ユーザー名: </span>
        <v-ons-input placeholder="（例：ほげほげ）" float v-model="user_name"></v-ons-input>
      </v-ons-list-item>
    </ons-card>
    <ons-card>
      <h1>ルームに参加</h1>
      <v-ons-list-item>
        <span style="margin-right:15px;">ルーム名: </span>
        <v-ons-input placeholder="（例：なんでも）" ></v-ons-input>
      </v-ons-list-item>
      <v-ons-button style="margin: 6px 0" @click="joinRoom()">はいる！</v-ons-button>
    </ons-card>
    <ons-card>
      <h1>ルームを作る</h1>
      <v-ons-button style="margin: 6px 0" @click="makeRoom()">つくる！</v-ons-button>
    </ons-card>
    <!-- <v-ons-fab @click="makeRoom()" style="position:fixed;" modifier="material" position="bottom right" >
>>>>>>> 354373ea2f09ddfac4127b5e84569c534c97b3c5
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
import Chat from '../../components/chat/Chat';
import Config from '../../config/Config';

export default {
  name: 'posts-page',
  components: {
    LoadingIndicator,
    Navbar,
    Chat,
  },
  methods: {
    goRoom() {
      //localStorage.setItem('Name' , this.user_name);
      this.$router.push({ name: 'play-room' ,params: { 
        //room_id: res.data.id, 
        room_id: 3,
        user_name:'ehama'
      } });
    },
    joinRoom(){
      // this.axios.post(this.joinurl, {
      //   name: this.room_id
      // })
      // .then(room_data => {
      //   console.log(room_data)
      //   this.goRoom(room_data)
      // })
      // .catch(err => {
      //   this.$ons.notification.alert('ルームが存在しません');
      // });
    },

    makeRoom(){
      // this.axios.post(this.makeurl, {
      //   room: {
      //     name: this.room_id
      //   }
      // })
      // .then(room_data => {
      //   console.log(room_data)
      //   this.goRoom(room_data)

      // })
      // .catch(err => {
      //   this.$ons.notification.alert('そのルーム名はすでに使われています');
      // });
      this.goRoom();

      
    },
    
  },
  created() {
    // this.axios.get("http://59.157.6.140:3000/plans")
    // .then((res) => {
    //   console.log(res.data);
    //   this.experiences = res.data
    // });
  },
  data() {
    return {
      // joinurl: `http://k-appdev.com:3003/rooms/search`,
      // makeurl:`http://k-appdev.com:3003/rooms`, 
      config: Config,
      room_id: '',
      user_name: localStorage.getItem('Name'),
      //strage_name:''
    };
  },
  computed: {
    currentArea() {
      return this.$store.state.currentArea;
    },
  }
};
</script>
