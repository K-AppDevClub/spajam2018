import calcScore from '../../components/sound/CalcScore.js'

export default {
  data() {
		return {
			room_id:1,
			user_name:"",
			ctx: null, 
			audioAnalyser: null, 
			bufferSize: 1024, 
			recordingFlg: false,
			mediaRecoder: null, 
			audioSrc: "", 
			shuoldPlay: false,
			audio: null,
			audioContext: null, 
			chunks: [],
			cur_spectrum: [],
			margin: 10, 
      idx: 0,
      preSpectrums: [],
      score: 0,
      socre_list: [],
      rate: 0.1,
		};
	},
	created(){
		this.room_id =this.$route.params.room_id;
    this.user_name =this.$route.params.user_name;
  },
  mounted() {
    this.clear();
  },
  computed: {
    rounded_score: function(){return Math.round(this.score) * this.rate },
  },
  beforeDestroy() {
    this.endRecording();
  },
  methods: {
    startRecording() {
      this.clear();
      this.audioContext =  new AudioContext();
      this.recordingFlg = true;
      navigator.getUserMedia({audio: true}, this.whenGetUserMedia, (e) => { console.log(e) })
    },

    whenGetUserMedia(stream){
      // 音声取得関連
      //  this.startMediaRecording(stream)

      var scriptProcessor = this.audioContext.createScriptProcessor(this.bufferSize, 1, 1);
      var mediastreamsource = this.audioContext.createMediaStreamSource(stream);
      mediastreamsource.connect(scriptProcessor);
      scriptProcessor.onaudioprocess = this.onAudioProcess;
      scriptProcessor.connect(this.audioContext.destination);
      // 音声解析関連
      this.audioAnalyser = this.audioContext.createAnalyser();
      this.audioAnalyser.fftSize = 2048;
      mediastreamsource.connect(this.audioAnalyser);
    },

    onAudioProcess(e) {
      // 波形を解析
      var spectrums = new Uint8Array(this.audioAnalyser.frequencyBinCount);
      this.audioAnalyser.getByteFrequencyData(spectrums);

      // 描画
      this.cur_spectrum = spectrums;
      // console.log(this.cur_spectrum);
      this.score += (this.socre_list[this.idx++] = calcScore.calc(this.preSpectrums, spectrums));
      this.preSpectrums = spectrums;
    },
    
    endRecording(){
      this.recordingFlg = false;
      //this.stopMediaRecording();
      if(this.audioContext){
        this.audioContext.close();
      }
      // console.log(this.score);
    },

    startMediaRecording(stream){
      this.mediaRecoder = new MediaRecorder(stream);
      this.mediaRecoder.ondataavailable = (ev)=>{ 
        this.chunks.push(ev.data); 
        this.audio = new Blob(this.chunks);
        this.audioSrc = URL.createObjectURL(this.audio);
      };
      this.mediaRecoder.start();
    },

    stopMediaRecording(){
      if (this.mediaRecoder === null) return;
      this.mediaRecoder.stop();
      this.mediaRecoder = null;
    },
    clear(){
      this.idx = 0;
      this.chunks = []
      this.shuoldPlay = false
      this.score = 0;
    },
  }	
}