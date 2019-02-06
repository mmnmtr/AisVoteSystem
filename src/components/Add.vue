<!-- <template>
	<div>

		<div class="container mt-4 body-content">
      		<b-form-group
                    label="ชื่อเนื้อหา"
                    label-for="namepost">
        		<b-form-input id="namepost"
                      type="text"
                      v-model="post.title"
                      required
                      placeholder="ข้อความ...">
       			</b-form-input>
      		</b-form-group>

      		<b-form-group
                    label="รายละเอียด"
                    label-for="description">
        		<b-form-input id="description"
                      type="text"
                      v-model="post.artise"
                      required
                      placeholder="ข้อความ...">
       			</b-form-input>
      		</b-form-group>

			<label>เนื้อหา</label>
			<b-form-textarea id="content"
                     v-model.number="post.score"
                     placeholder="ข้อความ..."
                     :rows="2"
                     :max-rows="3">
    		</b-form-textarea>
    		<label class="mt-3">เพิ่มรูปภาพ</label>

           <b-form-file @change="previewImage" v-model="post.file" :state="Boolean(post.file)" placeholder="Choose a file..."></b-form-file>

    		<div class="mt-3">
    			<img :src="previewTempImage" class="img-fluid">
    		</div>
    		<div class="row d-flex justify-content-center mb-3">
    			<div class="col-5">
    				<b-button @click="sendPost()" v class="btn btn-block mt-2">ยืนยัน</b-button>
    			</div>

    			<div class="col-5">
    				<button @click="cancel()" class="btn btn-block mt-2">ยกเลิก</button>
    			</div>
    		</div>
    		
		</div>

	</div>
</template>
<script>
	import { dbAuth, postRef, storage } from '../firebaseConfig.js'
	export default {
		data() {
			return {
				headerText: 'Addpost',
				post: {
					title: '',
					artise: '',
					score: 0,
					file: null
				},
				previewTempImage: null,
				value:100,
				max:0,
			}
		},
		methods: {
			previewImage: function(e) {
				let input = e.target
				if (input.files && input.files[0]) {
					let reader = new FileReader()
					reader.onload = (e)=> {
						this.previewTempImage = e.target.result
					}
					reader.readAsDataURL(input.files[0])
				} 
			},sendPost: function() {
				let filename = this.post.file.name
				let ext = filename.slice(filename.lastIndexOf('.'))
				let post = postRef.push(this.post)
				let storageRef = storage.ref('posts/'+post.key+ext)
				let upload = storageRef.put(this.post.file)
				let _this = this
				upload.on('state_changed',function(snanpshot){
			   _this.max = (snanpshot.bytesTransferred / snanpshot.totalBytes)
                * 100;
				},function(error){
					//display error
				},function(){
					var downloadURL = upload.snapshot.downloadURL
					postRef.child(post.key).update({file:downloadURL})
					// _this.$router.push('/post')
				}),
				sweetAlert("สำเร็จ!", "โพสเนื้อหาเรียบร้อย", "success");

                this.$router.push({ name:'post' })

				// then(()=>{
				// 	_this.$router.replace('/post')
				// })
			},
			cancel: function() {
		        swal({
		          title: "Are you sure?",
		          text: "คุณต้องการที่จะยกเลิกใช่ไหม?",
		          icon: "warning",
		          buttons: true,
		          dangerMode: true,
		        })
		        .then((willDelete) => {
		          if (willDelete) {
		            swal("ยกเลิกเรียบร้อยแล้ว", {
		              icon: "success",
		            });
		            this.$router.push({ name:'post' })
		          } else {
		            
		          }
		        });
		      }
		},
	}
</script>

 -->