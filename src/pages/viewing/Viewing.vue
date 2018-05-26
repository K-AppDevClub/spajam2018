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
    <navbar navType="blank" sg="Result"></navbar>
    <ObserveBattle/>
    <ons-card>
    </ons-card>
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
  mounted() {
    console.log(this.$route.params.score);
  },
  method:{
    
  }
};
</script>
