<style lang='scss' scoped>
.flex-container {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.action-btn {
  margin: 0 10px;
}
.big{
  font-weight: 900;
}
.att {
  text-indent: 1em;
}
.center{
  text-align: center;
}

</style>
<template>
  <ons-page>
    <br><br>
    <navbar navType="back" backType="router" msg="観戦モード"></navbar>
    <v-ons-card>
    <v-ons-row>
      <v-ons-col>
        <h3 style="text-align:center;" :enemy_result="enemy_result"> {{ enemy_result }}</h3>
      </v-ons-col>
      <v-ons-col>
        <h3 style="text-align:center;" :my_result="my_result">  {{ my_result }}</h3>
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-col>
        <h3 style="text-align:center;"> {{ enemy_name }}: {{ enemy_score }}</h3>
      </v-ons-col>
      <v-ons-col>
        <h3 style="text-align:center;"> {{ user_name }}:{{ my_score }}</h3>
      </v-ons-col>
    </v-ons-row>
    </v-ons-card>
    <ObserveBattle :x="judgePoint"/>
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import ObserveBattle from '../../components/observe-battle/ObserveBattle';
import Chat from '../../components/chat/Chat.js'

export default {
  name: 'viewing',
  mixins: [Chat,],
  components: {
    Navbar,
    ObserveBattle,
  },
  data() {
    return {
      user_name: "",
    }
  },
  mounted() {
    this.isPlayer = false;
  },
  method:{
  },

  watch:{
      isResult: function(){
        cosole.log("hige")
        if (isResult) return
        if(this.my_score > this.enemy_score){
          console.log(this.my_score)
          this.my_result = "Win!!"
          this.enemy_result = "Lose..."
        }else{
          this.my_result = "Lose..."
          this.enemy_result = "Win!!"
        }
    }
  }
};
</script>
