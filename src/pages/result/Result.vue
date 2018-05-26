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
.brk{
  background-color: #ffa500;
  color: #ffffff;
}
.back{
  text-align: center;
  width:  100% ;
  height: 250px;
  margin: 0 auto;
}
.lose{
  text-align: center;
  width:  70px ;
  height: auto;
  margin: 0, auto;
  // width: 100%;
}
.hoge{
  text-align: center;
}
.relative {
  position: relative;

}
.absolute {
  position: absolute;
  width: 70px ;
  height: auto;
  left: 40%;
  top: 50%;
}

</style>
<template>
  <ons-page>
    <navbar navType="blank" sg="Result"></navbar>
    <div v-if="$route.params.total_score1　>　$route.params.total_score2　">
      <ons-card> 
        <div class="relative">
          <h1 class="center">You Win!!</h1>
          <img :src="image" class="back">
          <div >
            <img :src="image_spa" class="absolute">
          </div>
        </div>
      </ons-card>
    </div>
    <div v-else>
      <ons-card> 
        <h1 class="center">You Lose...</h1>
        <v-ons-row>
          <v-ons-col>
            <div class="hoge">
              <img :src="image_lose" class="lose">
            </div>
          </v-ons-col>
        </v-ons-row>
      </ons-card>
    </div>
    <ons-card> 
      <h2 class="big">{{ $route.params.player1 }}</h2>
      <h3> Score:{{ $route.params.total_score1 }}</h3>
      <h2 class="big" style="margin-top:20px">{{ $route.params.player2 }}</h2>
      <h3> Score:{{ $route.params.total_score2 }}</h3>
    </ons-card>

    <v-ons-card>
      <div class="flex-container">
        <twitter class="action-btn"  v-bind:score = $route.params.total_score1></twitter>
        <v-ons-button class="action-btn"  @click="$router.push({ name: 'home'});">Home</v-ons-button>
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
  data(){
    return{
      image: require('../../../images/1017085.jpg'),
      image_spa: require('../../../images/spanyan2.png'),
      image_lose: require('../../../images/spanyan1.png'),
      
    }
  },
};
</script>
