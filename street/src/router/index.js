import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/Home'
import course from '@/view/course'
import Onlinecourses from '@/view/Onlinecourses'
import index from '@/view/Index'
import Learn from '@/view/Learn'
import Teachers from '@/view/Teachers'
import News from '@/view/News'
import contact from '@/view/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/',
      name: 'Home',
      component: Home,
      children:[
      	{
      		path:'/',
      		name:'index',
      		component:index
      	},{
      		path:'/course',
      		name:'course',
      		component:course
      	},{
      		path:'/Onlinecourses',
      		name:'Onlinecourses',
      		component:Onlinecourses
      	},{
      		path:'/Learn',
      		name:'Learn',
      		component:Learn
      	},{
      		path:'/Teachers',
      		name:'Teachers',
      		component:Teachers
      	},{
      		path:'/News',
      		name:'News',
      		component:News
      	},{
      		path:'/contact',
      		name:'contact',
      		component:contact
      	}
      ]
    }
  ]
})
