<template>
  <div>
    <h2>{{msg}}</h2>
    此页面不存在
  </div>
</template>

<script>
export default {
  name:'orange',
  data(){
    return {
      msg:'我是404页面'
    }
  }
}
</script>

<style scoped>
  h2{
    color: red;
  }
</style>

