import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import orange from '@/components/orange'
import orange1 from '@/components/orange1'
import orange2 from '@/components/orange2'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params111 from '@/components/params'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode:'history', 
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:Hi1,
        right:Hi2
      }
    },
    {
      path: '/o',
      name: 'orange',
      component: orange,
      children:[
        {path: 'o1',name:'orange1111',component: orange1},
        {path: 'o2',name:'orange2222',component: orange2}
      ]
    },
    {
      path: '/cc',
      name: 'HelloWorldcc',
      components: {
        left:Hi2,
        right:Hi1
      }
    },
    {
      path: '/params111/:newsId/:newsTitle',
      name: 'Params111',
      component: Params111
    },        
    {
      path: '/gobackhome',
      redirect: '/'
    },        
    {
      path: '/goparams/:newsId/:newsTitle',
      redirect: '/Params111/:newsId/:newsTitle'
    },
    {
      path: '/hi1',
      component: Hi1,
      alias:'/orange'
    },
    {
      path: '*',
      name: 'Error-404',
      component: Error
    }            
  ]
})
