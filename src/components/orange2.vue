<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name:'orange',
  data(){
    return {
      msg:'我是子路由-orange2222'
    }
  }
}
</script>

<style scoped>
  h2{
    color: pink;
  }
</style>

