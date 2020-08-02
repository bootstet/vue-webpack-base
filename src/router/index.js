import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

import Login from '../components/Login.vue'
// import HelloWorld from '../components/HelloWorld.vue'
import StudyContainer from '../components/StudyContainer.vue'

Vue.use(VueRouter) // 注册组件  对象 或者 方法

// 路由规则
const routes = [
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'home',
    path: '/',
    component: Login
  },
  {
    path: '/bootstet',
    component: StudyContainer,
    children: [
      {
        path: '',
        name: 'Index',
        component: Index
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('../views/Blog.vue')
      },
      {
        path: 'photo',
        name: 'Photo',
        component: () => import('../views/Photo.vue')
      },
      {
        path: 'detail/:id',
        name: 'Detail',
        // 开启props，会把url中的参数传递给组件
        // 在组件中通过 props来接受url参数
        props: true,
        // 懒加载路由，当加载该路由的时候在去访问路由
        component: () => import('../views/Detail.vue')
      }
    ]
  }
]
// 2创建 router 对象
const router = new VueRouter({
  routes
})

export default router
