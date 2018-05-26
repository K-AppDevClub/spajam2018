export default {
  data() {
    return {
      enemy_name: "",
      enemy_score: 0,
      isPlaying: false,
      isReady: false
    };
  },
  beforeDestroy() {
    console.log("destroy")
    this.messageChannel.unsubscribed();
    this.$cable.subscriptions.remove(this.messageChannel);
  },
  mounted() {
    var that = this
    console.log(this.sum)
    this.messageChannel = this.$cable.subscriptions.create( "MessageChannel",
      {
        connected() {
          console.log("connected");
          var room_id = that.room_id || 0
          this.perform('room_login', {room_id: room_id, name: that.user_name});
        },
        unsubscribed() {
          console.log("unsubscribed")
          this.perform('unsubscribed');
        },
        disconnected() {
          console.log("disconnected")
        },
        received(data) {
          console.log("received", data);
          if(data.status=="cal_stream" && data.name != that.user_name){
            that.enemy_name = data.name
            that.enemy_score = data.score
          }
          if(data.status=="login" && data.name != that.user_name){
            that.enemy_name = data.name
            this.perform('start_game');
          }
          if(data.status=="start_game"){
            that.isReady = true;
          }
          if(data.status=="disconnected"){
            that.$router.go(-1)
            that.$ons.notification.alert('切断されました');
          }
        },
      }
    )
  },
  methods: {
    start_connection(){
      this.isPlaying = true;
      this.sum = 0;
    },
    cal_stream() {
      var score = this.sum || 10;
      this.messageChannel.perform('cal_stream', {
        name: this.user_name, 
        score: score, 
      });
    },
  },
  watch: {
    sum: function(val){
      if(this.isPlaying){
        this.cal_stream()
      }
    },
  }
};
