<template>
  <ons-page>
    <navbar navType="blank" msg="Result"></navbar>
    <ons-card>
      <h1>You win!</h1>
      <h3>Your Score:</h3>
      <v-ons-button  @click="$router.push({ name: 'home'});">もどる</v-ons-button>
    </ons-card>
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';

export default {
  name: 'result',
  components: {
    Navbar,
  },
  method:{
    
  }
};
</script>
