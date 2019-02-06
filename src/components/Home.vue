<template>
	<div>
		<app-header></app-header>
		<meta content="width=device-width,initial-scale=1" name="viewport">
    <link href="https://fonts.googleapis.com/css?family=Kanit|Nunito:900" rel="stylesheet">
    <br>
    <br>
		<div class="container mt-5 mb-5  text-center">
      <b-img src="https://brandinside.asia/wp-content/uploads/2016/08/AIS-logo-1.jpg" fluid alt="Fluid image"  />
      <h4 class="kanit">กรุณากรอกรหัส</h4>
      <h5 class="nunito">ONE TIME PASSWORD</h5>
      <h6 class="kanit" style="color:#72a433;">เพื่อร่วมโหวตผลงานศิลปะไทย</h6>
      <br>
      <center><b-form-group>
				<b-form-input id="fullname"
				              type="password"
				              v-model="inputOtp"
				              required
				              placeholder="กรอกรหัส OTP "
				              class="text-center" style="width:300px;">
				</b-form-input>
			</b-form-group>
	</center>
		<br>
			<center><b-button style="background-color:#8dc448; !important;border:none;border-radius:100px;width:350px;font-size:18px;" class="nunito" block @click="checkOtp(numbers['.key'])" >CONFIRM</b-button>
			</center>
		</div>
<br>


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
		data() {
			return {
				inputOtp:'',
			}
		},
		methods: {
			checkOtp: function(numberKey) {
				var _this = this
				numberRef.orderByChild('number').equalTo(this.inputOtp).once("value",
					function(snapshot) {
						if (snapshot.val() == null) {
							// alert('ไม่พบในระบบ')
							swal("ไม่พบรหัสในระบบ","กรุณาลงทะเบียนหน้างานเพื่อรับรหัส OTP","error")
						} else {
							snapshot.forEach(function(data) {
								if (data.child('status').val()==='Used') {
									// alert('ใช้งานไปแล้ว')
									swal("รหัสนี้ถูกใช้งานไปแล้ว","กรุณากรอกรหัสใหม่","error")
								} else {
									numberRef.child(data.key).update({status:'Used'})
									// _this.$router.push('artlist')
                					// this.$router.push({ name:'post' })
                					_this.$router.push('/artlist')
								}
							});
						}
					});
			}
		}
	}
</script>