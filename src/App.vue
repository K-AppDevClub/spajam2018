<style lang="scss" scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}
img {
  max-width: 150px;
}
ons-list-item {
  cursor: pointer;
}
ons-list-item {
  cursor: pointer;
}
navbar {
  margin-bottom:100px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<template>
<v-ons-page id="app">
  <v-ons-splitter>
    <v-ons-splitter-side collapse width="250px" :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'" :open.sync="menuIsOpen" @update:open="onUserInteraction">
      <side-menu></side-menu>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </v-ons-splitter-content>
  </v-ons-splitter>
</v-ons-page>
</template>

<script>
import SideMenu from './components/side-menu/SideMenu';
import HomePage from './pages/home/HomePage';
import store from './store';

export default {
  name: 'app',
  store,
  data() {
    return {
      pageStack: [HomePage]
    }
  },
  computed: {
    menuIsOpen() {
      return store.state.menuIsOpen;
    },
  },
  mounted() {
    var ons = this.$ons
    ons.ready(function() {
      console.log("ons ready")
      if(typeof device === 'undefined'){
        console.log("waiting device ")
        document.addEventListener("deviceready", onDeviceReady, false);
      }else{
        console.log("device already!")
      }
      ons.disableDeviceBackButtonHandler();
      ons.setDefaultDeviceBackButtonListener(function(event) {
        ons.notification.confirm('Do you want to close the app?') // ユーザー側に確認します。
        .then(function(index) {
          if (index === 1) { // OK が押された場合
            navigator.app.exitApp(); // アプリを終了します。
          }
        });
      });
    });
  },
  components: {
    SideMenu,
  },
  methods: {
    onUserInteraction(event) {
      console.log(event);   // on click ons-splitter-side-mask, event always false(?)
      store.commit('toggleMenu', event);
    },
    toggleMenu() {
      this.$store.commit('toggleMenu', true);
    },
  },
};
</script>
