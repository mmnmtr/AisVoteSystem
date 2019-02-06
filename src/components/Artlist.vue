<template>
	<div class="nunito">
		<app-header></app-header>
		<meta content="width=device-width,initial-scale=1" name="viewport">
    <link href="https://fonts.googleapis.com/css?family=Kanit|Nunito:900" rel="stylesheet">
		<div class="headpage">
			ART WORK
		</div>
		<br>
		<p class="kanit p-2 text-center">
			" กิจกรรมโหวตผลงานศิลปะไทยของคนไทยกับ AIS "
			<br>เหลือเวลาโหวต 
		</p>
		<center><Countdown style="" deadline="May 7, 2018 20:00:00"></Countdown></center>
    
		<br>
		<div class="container">

			<div class="card mb-4" v-for="post in posts" style="box-shadow: 5px 5px 5px #eee;">
				<router-link class="mb-2 link" :to="{ name: 'vote', params: {key:post['.key']} }">

				<b-img-lazy :src="post.file" center fluid-grow blank-color="#bbb" 
	 	        alt ="img" class="card-img-top"/>

				<div class="card-body">
					<h5 class=" mt-0 mb-1 kanit text-center card-title p-0 m-0 font-size-1">ชื่อผลงาน : {{ post. art }}</h5>
					<p class="mt-0 mb-1 kanit text-center" style="color:#8dc448;"> {{ post.artist }}</p>
				</div>

				</router-link>
			</div>


		</div>



	</div>
</template>
<script>
	import Header from './Header.vue'
	import { postRef } from '../firebaseConfig.js'
	import Countdown from 'vuejs-countdown'

	export default {
		components: {
			appHeader: Header,
			Countdown 
		},
		firebase: {
			posts: postRef
		},
	}
</script>