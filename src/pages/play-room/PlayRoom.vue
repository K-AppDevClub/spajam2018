<template>
  <ons-page>
    <navbar navType="back" backType="router" :msg="room_id"></navbar>
    <h1> {{ user_name }} </h1>
    <v-ons-button @click="startRecording()">開始</v-ons-button>
    <v-ons-button @click="endRecording()">停止</v-ons-button>
    <br>
    <graph :spectrums="cur_spectrum"></graph>
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
      size: { 
        width: 100, 
        height: 50 
      },
      socre_list: [], 
      idx: 0,
		}
	},
	created(){
		this.room_id =this.$route.params.room_id;
    this.user_name =this.$route.params.user_name;
  },
  mounted() {
    this.clear();
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
      this.startMediaRecording(stream)

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
      // if (!this.recordingFlg) return;
      // // 音声のバッファを作成
      // var input = e.inputBuffer.getChannelData(0);
      // var bufferData = new Float32Array(this.bufferSize);
      // for (var i = 0; i < this.bufferSize; i++) bufferData[i] = input[i];
      // 波形を解析
      var spectrums = new Uint8Array(this.audioAnalyser.frequencyBinCount);
      this.audioAnalyser.getByteFrequencyData(spectrums);

      // 描画
      this.cur_spectrum = spectrums
      console.log(this.cur_spectrum);
    },
    
    endRecording(){
      this.recordingFlg = false;
      this.stopMediaRecording();
      this.audioContext.close();
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
    },
  }	
};
</script>
