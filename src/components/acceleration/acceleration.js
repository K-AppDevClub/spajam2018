export default {
	name: "gyro",

	mounted(){
		window.addEventListener("devicemotion", this.getAcceleration);
	},
	data(){
		return {
			x: 0,
			y: 0,
			z: 0,
			sum : 0,
		}
	},
	methods: {
		getAcceleration(e){
			console.log(e)
			var acc = e.acceleration
			this.x = acc.x > 5 ? Math.floor(acc.x) : 0;
			this.y = acc.y > 5 ? Math.floor(acc.y) : 0;
			this.z = acc.z > 5 ? Math.floor(acc.z) : 0;
			this.sum += Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
		},
	},

	computed: {
		bga(){
			return [this.x|| 0, this.y || 0, this.z || 0]
		}
	},
}

