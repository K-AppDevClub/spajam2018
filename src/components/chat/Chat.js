export default {
  data() {
    return {
    };
  },
  beforeDestroy() {
    this.$cable.subscriptions.remove(this.messageChannel);
  },
  mounted() {
    var that = this
    console.log(this.sum)
    this.messageChannel = this.$cable.subscriptions.create( "MessageChannel",
      {
        connected() {
          console.log("connected");
          this.perform('room_login', {room_id: that.room_id, name: that.user_name});
        },
        disconnected() {
          console.log("disconnected")
        },
        received(data) {
          console.log("received", data);
          that.messages.push(data)
          // if(data.status=="msg")
          //   that.$store.commit('addMessage', data );
          // if(data.status=="drag")
          //   that.$store.commit('newDragStream', data );
        },
      }
    )
  },
  methods: {
    cal_stream() {
      var cal = this.sum || 10;
      this.messageChannel.perform('cal_stream', {
        name: this.user_name, 
        cal: cal, 
      });
    },
  },
};
