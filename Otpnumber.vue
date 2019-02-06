<template>
	<div>
		 <meta content="width=device-width,initial-scale=1" name="viewport">
    	<link href="https://fonts.googleapis.com/css?family=Kanit|Nunito:900" rel="stylesheet">
		<app-header></app-header>

		<div class="headpage nunito">
			ONE TIME PASSWORD
		</div>
		
		<table class="table table-striped mt-3">
			<thead>
				<tr>
					<th width="200">OTP</th>
					<th class="text-center">Status</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="otp in numbers">
					<td>{{ otp.number }}</td>
					<td class="text-center">{{ otp.status }}</td>
				</tr>
			</tbody>
		</table>

		<div class="ml-md-auto col-sm-12 md-text-right mt-3 mb-3">
			<center><b-button style="background-color:#8dc448; !important;border:none;border-radius:100px;width:350px;font-size:18px;" class="nunito" block @click="genOtps">	GEN OTP</b-button></center>
			<!-- <p class="p-2 text-center">สุ่มเลขครั้งละ 20 ชุด แต่ละชุดใช้ได้เพียงครั้งเดียว เมื่อใช้แล้วสถานะจะเปลี่ยน</p> -->
		</div>

	</div>
</template>

<script>
import Header from './Header.vue'
	import { numberRef } from '../firebaseConfig.js'
	export default {
		components: {
			appHeader: Header,
		},
		firebase: {
			numbers: numberRef
		},
		// data() {
		// 	return {
		// 		number: {
		// 			number: null,
		// 			status:''
		// 		}
		// 	}
		// },
		methods: {
			genOtps: function() {
				for (var i = 0; i < 30; i++) {
					var num = Math.floor(Math.random() * 900000) + 100000
					numberRef.push({number:num.toString(),status:'Not use'})
				}
				sweetAlert("สำเร็จ!", "แต่ละรหัสใช้ได้เพียงครั้งเดียว", "success");
			}
		}
	}
</script>