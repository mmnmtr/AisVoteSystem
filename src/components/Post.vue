<template>
	<div class="kanit">
		<app-header></app-header>
		<meta content="width=device-width,initial-scale=1" name="viewport">
    <link href="https://fonts.googleapis.com/css?family=Kanit|Nunito:900" rel="stylesheet">
		<div class="container body-content mt-3 ">
			<br>
				<h4 class="text-center">ผลงานของศิลปิน</h4>
      <span>ชื่อผลงาน : </span>
      <b-form-input
                     v-model="post.art"
                     placeholder="name"
                     :rows="2"
                     :max-rows="1" class="mt-3 mb-3">
			</b-form-input>
      <span>ชื่อศิลปิน : </span>
			<b-form-input
                     v-model="post.artist"
                     placeholder="artist"
                     :rows="2"
                     :max-rows="1" class="mt-3 mb-3">
			</b-form-input>

    	    <!-- <div>
    	    	<b-progress :value="value" :max="max" class="mb-3"></b-progress>
    	    </div> --><br>

    	    <b-form-file class="mt-2" @change="previewImage" v-model="post.file" :state="Boolean(post.file)" placeholder="Choose a file..."></b-form-file>
			<div class="mt-3 col-6" style="margin:0 auto;">
				<img :src="previewTempImage" class="img-fluid">
			</div>
    	    <center><button href="/" @click="sendPost" class="btn btn-lg btn-primary btn-block"  style="background-color:#8dc448; !important;border:none;border-radius:100px;width:350px;font-size:18px;" >
				Post
			</button></center>
		</div>
	</div>
</template>
<script>
	import Header from './Header.vue'
	import { dbAuth, postRef, storage} from '../firebaseConfig.js'

	export default {
		components: {
			appHeader: Header,
		},
		firebase:{
			feeds : postRef
		},
		data() {
			return {
				headerText: 'Post',
				post: {
					art:'',
          			artist:'',
					score: 0,
					file:null,
					key:''
				},
				account:{
					displayName:''
				},
				previewTempImage:null,
				value:100,
				max:0,
			}
		},
		methods: {
			previewImage: function(e) {
				let input = e.target
				if (input.files && input.files[0]){
					let reader = new FileReader()
					reader.onload = (e)=> {
						this.previewTempImage = e.target.result
					}
					reader.readAsDataURL(input.files[0])
				}
			},
			sendPost: function() {
				let filename = this.post.file.name//การแยกชื่อไฟล์
				let ext = filename.slice(filename.lastIndexOf('.'))//การแยกนามสกุลไฟล์ เมื่อเวลาอัพโหลดตั้งชื่อใหม่ โดยเอาkeyมาใช้เพื่อไม่ให้ชื่อรูปมันซ้ำกัน
				let post = postRef.push(this.post)//นำลงdatabaseเก็บไว้โดยในตัวแปรpost โดยจะได้ค่าkeyออกมา
				let storageRef = storage.ref('post/'+post.key+ext) //ชื่อไฟล์รูป
				let upload = storageRef.put(this.post.file)//เอาไฟล์ขึ้นอัพโหลดในstorage
				let _this = this

				upload.on('state_changed',function(snapshot){
					_this.max = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
				},function(error) {
					//display error
				},function(){
					var downloadURL = upload.snapshot.downloadURL
					postRef.child(post.key).update({file:downloadURL})
					_this.$router.push('/vote')

				}),
				function(){
					_this.$toaster.error(err.message)
				}
			},
		created() {
			let _this = this
			dbAuth.onAuthStateChanged(function(user){
				console.log(user);
				_this.displayName = user.displayName
			})
		}
		}
	}
</script>
