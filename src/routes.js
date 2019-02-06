import Home from './components/Home.vue'
import Otpnumber from './components/Otpnumber.vue'
import Artlist from './components/Artlist.vue'
import Vote from './components/Vote.vue'
 import Post from './components/Post.vue'
import Result from './components/Result.vue'
import Thank from './components/Thank.vue'

export const routes = [
	{	
		path:'/result',component: Result, name: 'result', meta:{requireAuth: true}
	},
	 {	
		path:'/post',component: Post, name: 'post', meta:{requireAuth: true}
	 },
	{	
		path:'/vote',component: Vote, name: 'vote', meta:{requireAuth: true}
	},
	{	
		path:'/artlist',component: Artlist, name: 'artlist' , meta:{requireAuth: true}
	},
	{	
		path:'/otpnumber',component: Otpnumber, name: 'otpnumber', meta:{requireAuth: true}
	},
	{	
		path:'/',component: Home, name: 'home', meta:{requireAuth: true}
	},
	{	
		path:'/thank',component: Thank, name: 'thank', meta:{requireAuth: true}
	}
]