export default {
  data() {
    return {
      enemy_name: "相手",
      enemy_score: 0,
      enemy_result: "",
      my_result: "",
      my_score: 0,
      isPlaying: false,
      isReady: false,
      isPlayer: true,
      judgeCounter: 0,
      isResult: false,
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
          var room_id = that.room_id || 1
          if(that.isPlayer){
            this.perform('room_login', {room_id: room_id, name: that.user_name});
          }else{
            this.perform('start_viewing', {room_id: room_id});
          }
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
          if(data.status=="cal_stream" && !that.isPlayer && that.user_name==""){
            that.user_name = data.name;
            console.log(`set user ${that.user_name}`)
          }
          if(data.status=="cal_stream" && data.name == that.user_name){
            that.my_score = data.score
          }
          if(data.status=="cal_stream" && data.name != that.user_name){
            that.enemy_name = data.name
            that.enemy_score = data.score
          }
          if(data.status=="login" && data.name != that.user_name && that.isPlayer){
            that.enemy_name = data.name
            that.perform('start_game');
          }
          if(data.status=="start_game"){
            that.my_result = ""
            that.enemy_result = ""
            that.judgeCounter = 0;
            that.isReady = true;
            that.isResult = true
          }
          if(data.status=="end_game"){
            if(that.isPlayer){
              that.goResult();
            }else{
              that.$router.push({ name: 'viewing' });
            }
          }
          if(data.status=="disconnected" && that.isPlayer){
            that.$router.go(-1)
            that.$ons.notification.alert('切断されました');
          }
        },
      }
    )
  },
  computed: {
    judgePoint(){
      var a = this.my_score, b = this.enemy_score;
      var point = 255 + 5 * this.judgeCounter;
      if (a > b){
        var rate = 1 - b / a
      }
      else{
        var rate = 1 - a / b
      }
      console.log(point)
      var threshold = 0.2;
      if(rate > threshold || rate < -threshold){
        if(a>b)
          this.judgeCounter += 1;
        else
          this.judgeCounter -= 1;

        if(Math.abs(this.judgeCounter)>50){
          this.isResult = false
          if(this.isPlayer){
            this.stopGame();
            this.messageChannel.perform('end_game');
          }
        }
      }
      return point;
    },
  },
  methods: {
    start_connection(){
      this.isPlaying = true;
      this.sum = 0;
    },
    cal_stream() {
      var score = parseInt(this.sum + this.rounded_score);
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
    rounded_score: function(val){
      if(this.isPlaying){
        this.cal_stream()
      }
    },
    judgeCounter: function(){
      if (this.judgeCounter > 50){
        this.isResult = false
      }
    }
  }
};
