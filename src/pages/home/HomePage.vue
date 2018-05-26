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
  <navbar></navbar>
  <accceleration/>
  </v-ons-page>
</template>

<script>
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import Accceleration from '../../components/acceleration/acceleration'
import Navbar from '../../components/navbar/Navbar';

export default {
  name: 'posts-page',
  components: {
    LoadingIndicator,
    Accceleration,
    Navbar,
  },
  methods: {
  },
  created() {
  },
  data() {
    return {
    };
  },
};
</script>
