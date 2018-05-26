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
    <navbar navType="blank" msg="観戦モード"></navbar>
    <ObserveBattle :x="judgePoint"/>
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import ObserveBattle from '../../components/observe-battle/ObserveBattle';
import Chat from '../../components/chat/Chat.js'

export default {
  name: 'result',
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
  }
};
</script>
