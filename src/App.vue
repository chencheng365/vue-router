<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="goGo">前进</button>
      <button @click="backHome">返回首页</button>
    </div>
    <p>
      <span>导航</span><br>
      <router-link to="/">首页</router-link>|
      <router-link to="/o">orange页面</router-link>
      <router-link :to="{name:'orange1111',params:{userName:'hahaha'}}">orange---1</router-link>|
      <router-link to="/o/o2">orange---2</router-link>|
      <router-link to="/params111/198/I am good man">params</router-link>|
      <router-link to="/gobackhome">goBackMome</router-link>|
      <router-link to="/goparams/112/I like vue.js">goParams</router-link>|
      <router-link to="/orange">orange</router-link>|
    </p>
    <div>路由的name值-----{{ $route.name }}</div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
 <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    goGo(){
      this.$router.go(-1)
    },
    backHome(){
      this.$router.push('/orange')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 /* 进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除 */
.fade-enter{
  opacity: 0;
}
/* 离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除 */
.fade-leave{
  opacity:1;
}
/* 离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除 */
.fade-enter-active{
  transition:opacity .5s;
}
/* 进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除 */
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
