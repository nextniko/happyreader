import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index.vue'
import Login from './views/login.vue'
import Resgister from './views/resgister.vue'
import Boy from './views/boy.vue'
import Colleagues from './views/colleagues.vue'
import Girl from './views/girl.vue'
import Loser from './views/loser.vue'
import Rank from './views/rank.vue'
import Reader from './views/reader.vue'
import Readers from './views/readers.vue'
import Room from './views/room.vue' 

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component:Index 
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/resgister',
      name:'resgister',
      component:Resgister
    },
    {
      path:'/boy',
      name:'boy',
      component:Boy
    },
    {
      path:'/colleagues',
      name:'colleagues',
      component:Colleagues
    },
    {
      path:'/girl',
      name:'girl',
      component:Girl
    },
    {
      path:'/loser',
      name:'loser',
      component:Loser
    },
    {
      path:'/room',
      name:'room',
      component:Room
    },
    {
      path:'/reader/:title',
      name:'reader',
      component:Reader,
      props:true
    },
    {
      path:'/readers/:title/:id',
      name:'readers',
      component:Readers,
      props:true
    },
    {
      path:'/rank/',
      name:'rank',
      component:Rank,
    },
    {
      path:'/rank/:position',
      name:'rank',
      component:Rank,
      props:true
    },
  ]
})
