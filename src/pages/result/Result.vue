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
    <ons-card>
      <h3 class="center">Win!! </h3>
      <h2 class="big"> {{ $route.params.player1 }} </h2>
      <h3> Score:{{ $route.params.total_score1 }}</h3>
      <div class="att">
        <p>Sound Score: {{ $route.params.sound_score1 }}</p>
      <p>Shake Score: {{ $route.params.shake_score1 }}</p>
      </div>
   
    </ons-card>
    <ons-card>
      <h3 class="center">Lose... </h3>
      <h2 class="big">{{ $route.params.player2 }}</h2>
      <h3> Score:{{ $route.params.total_score2 }}</h3>
      <div class="att">
        <p>Sound Score: {{ $route.params.sound_score2 }}</p>
        <p>Shake Score: {{ $route.params.shake_score2 }}</p>
      </div>
      
    </ons-card>

    <v-ons-card>
      <div class="flex-container">
        <twitter class="action-btn"  v-bind:score = $route.params.total_score1></twitter>
        <v-ons-button class="action-btn"  @click="$router.push({ name: 'home'});">Homeへ</v-ons-button>
      </div>
 
    </v-ons-card>


  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import Twitter from '../../components/twitter/Twitter';

export default {
  name: 'result',
  components: {
    Navbar,Twitter
  },
  mounted() {
    console.log(this.$route.params.score);
  },
  method:{
    
  }
};
</script>
