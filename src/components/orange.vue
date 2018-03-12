<template>
  <div>
    <h2>{{msg}}</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'orange',
  data(){
    return {
      msg:'路由切换-orange'
    }
  },
  beforeRouteEnter:(to,from,next) => {
    console.log("准备进入路由模板");
    console.log(to);
    console.log(from);
    next();
  },  
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }  
}
</script>

<style scoped>
  h2{
    color: red;
  }
</style>

