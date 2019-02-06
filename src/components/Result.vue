<template>
	<div class="text-center">
		<app-header></app-header>
		<meta content="width=device-width,initial-scale=1" name="viewport">
    <link href="https://fonts.googleapis.com/css?family=Kanit|Nunito:900" rel="stylesheet">
		<div class="headpage nunito">
			SCORE ART
		</div>
		<!-- <p class="p-2 text-center">
			กิจกรรมโหวตผลงานศิลปะภายในงาน "AIS ART" เหลือเวลาโหวต 30:00 นาที
		</p> -->
<br>
		<div class="container mb-4" v-for="post in posts">

			<div class="cover">
			<div class="left">
				<b-img-lazy :src="post.file"  style="border-radius:10px; " center fluid-grow blank-color="#bbb" 
	 	        alt ="img"/>
			</div>

			<div class="right">
				<br>
				<p style="color:#434c17;font-weight: bold;" class="kanit">ชื่อผลงาน : {{ post.art }}</p>
				<p style="font-weight: bold;" class="kanit"> ศิลปิน : {{ post.artist }}</p>
				<p class="kanit"><label style="color:#afc928;font-weight: bold;font-size:40px;  width:70px; border: 5px solid #afc928;
    border-radius: 5px;">{{ post.score }}</label> <br>คะแนน</p>
				<hr style="color: #afc928;">
			</div>
			</div>

		</div>
	</div>
</template>
<script>
	import Header from './Header.vue'
	import { numberRef , postRef } from '../firebaseConfig.js'

	export default {
		components: {
			appHeader: Header,
		},
		firebase: {
			numbers: numberRef,
			posts: postRef
		},
		data() {
			return {
				
			}
		},
	}
</script>