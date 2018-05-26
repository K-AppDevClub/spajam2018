<template>
  <ons-page>
    <navbar navType="back" backType="router" :msg="room_id"></navbar>
    <h1> {{ user_name }} </h1>
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';

export default {
  name: 'play-room',
  components: {
    Navbar,
	},
	data(){
		return{
			room_id:1,
      user_name:"",
		}
	},
	created(){
		this.room_id =this.$route.params.room_id;
    this.user_name =this.$route.params.user_name;
	},
	
};
</script>
