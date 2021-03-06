import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ja';
import * as VueGoogleMaps from 'vue2-google-maps';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';import ActionCable from 'actioncable';
import 'onsenui/css/onsenui.css';
import App from './App';
import routes from './routes';
import tone from 'tone';
const cable = ActionCable.createConsumer('ws:k-appdev.com:3010/cable');

import anime from 'animejs';

import 'onsenui/css/onsen-css-components.css';
// import '../static/css/onsen-css-components-green.min.css';
import '../static/css/onsen-css-components-orange.min.css';
// import '../static/css/onsen-css-components-pink.min.css';

Vue.config.productionTip = false;

Vue.use(Element, { locale });
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC3FN2Ff1tNSnNyGMTgx2fR7-OB-4wPOWE',
    libraries: 'places',
  },
});
Vue.use(VueOnsen);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.prototype.$cable = cable;
Vue.prototype.$anime = anime;
Vue.prototype.$tone = tone;

const router = new VueRouter({
  mode: 'hash',
  base: window.location.href,
  routes, // short for `routes: routes`
});

new Vue({
  components: {
    App,
  },
  template: '<App/>',
  router,
}).$mount('#app');


document.addEventListener("backbutton", function(e){
  e.preventDefault();
  //処理したいコードをこの下にかく
  console.log("backbutton")
  VueOnsen.notification.confirm('アプリを終了しますか？')
  .then((res) => {
    if (res == 1) navigator.app.exitApp();
  });
}, false);