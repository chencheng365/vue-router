<template>
  <div>
    <h2>{{msg}}-**通过 "router-link" 标签中的to传参**-{{$route.params.userName}}</h2>
  </div>
</template>

<script>
export default {
  name:'orange',
  data(){
    return {
      msg:'我是子路由-orange1111'
    }
  }
}
</script>

<style scoped>
  h2{
    color: blue;
  }
</style>

