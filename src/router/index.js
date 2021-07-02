import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:()=>import('../views/Home/Home.vue')
	},
	{
		path:'/mall',
		component:()=>import('../views/Mall.vue')
	},
	{
		path:'/profile',
		component:()=>import('../views/Profile.vue')
	},
	{
		path:'/shopcar',
		component:()=>import('../views/Cart/Shopcar.vue')
	},
  {
    path:'/details/:id',
    component:()=>import('../views/Details/Details.vue')
  }
]

export default new Router({
  routes,
	mode:'history'
})
