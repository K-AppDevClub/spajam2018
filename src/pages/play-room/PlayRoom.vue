

<template>
  <ons-page>
    <navbar navType="back" backType="router" :msg="room_id"></navbar>
		<bar/>
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import Bar from '../../components/bar/Bar'

export default {
  name: 'play-room',
  components: {
		Navbar,
		Bar,
	},
	data(){
		return{
			room_id:1,
			user_name:"",
			width: 100,
		}
	},
	created(){
		this.room_id =this.$route.params.room_id;
    this.user_name =this.$route.params.user_name;
	},
	methods: {
		
	}
	
};
</script>
