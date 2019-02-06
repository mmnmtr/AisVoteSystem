<template>
	<div>
		<app-header></app-header>
<meta content="width=device-width,initial-scale=1" name="viewport">
    <link href="https://fonts.googleapis.com/css?family=Kanit|Nunito:900" rel="stylesheet">
		<div class="body-content">

		<div class="headpage mb-3 nunito">
			VOTE
		</div>
		<!-- p class="text-center">เหลือเวลาโหวต 24:00 นาที</p> -->
		<br>
		<br>
		<div class="col-12">
			<b-img-lazy :src="post.file" style="border-radius: 12px;" class="mb-3" center fluid-grow blank-color="#8dc448" alt ="img" />
	 	    
			<table class="ml-3 mb-3">
				<thead>
					<tr>
						<th class="mt-0 mb-1 kanit card-title p-0 m-0 "style="">ชื่อผลงาน</th>
						<th class="mt-0 mb-1 kanit" style="color:;">: {{ post.art }} </th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="mt-0 mb-1 kanit card-title p-0 m-0 "style="font-weight: none;">ศิลปิน</td>
						<td class="mt-0 mb-1 kanit" style="">: {{ post.artist }} </td>
					</tr>
				</tbody>
			</table>
		</div>
		

		<div class="col-12 mb-3">
		<center><b-button style="background-color:#8dc448; !important;border:none;border-radius:100px;width:350px;font-size:18px;" class="nunito" block @click="vote()">VOTE</b-button></center>
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
				post: {
					art:'',
          			artist:'',
					score: 0,
					file:null,
					key:''
				},
				
				number:{
					number:'',
					status:''
				},
			}
		},
		methods: {
			vote: function(){
				
				//lock vote
				// this.number.status = 'no'
				
				// update score
				// const updatescore = this.post.score+1
				// var sumPoint = (parseInt(snapshot.child("score").val())+1)
				// postRef.child(this.post.key).update({score:sumPoint})

				// postRef.push(this.post)
				// this.post.score = '+1'

				var score = parseInt(this.post.score)
				var sum = score+1
				postRef.child(this.post.key).update({score:sum})

				//update status
				// numberRef.child(this.$cookie.get('key')).update({status:'vote'})

				sweetAlert("สำเร็จ!", "ทำการโหวตเรียบร้อย", "success");
				this.$router.push({ name: 'result'});

	        },
		},
		created(){
            console.log(this.$route.params.key);
            let _this = this
            postRef.child(this.$route.params.key).once("value")
                .then(function (snapshot) {
                    console.log(snapshot.val())
                    
                      _this.post.art = snapshot.child("art").val()
                      _this.post.artist = snapshot.child("artist").val()
                      _this.post.score = snapshot.child("score").val()
                      _this.post.file = snapshot.child("file").val()
                      _this.post.key = snapshot.key

                })
             if(this.$cookie.get('key') && this.$cookie.get('status')=='yes'){
				// this.user.otp = this.$cookie.get('otp');
				// this.user.status = this.$cookie.get('status');
			}else{
				this.$router.push({ path: '/Result'});
			}
        }
	}
</script>