<template>
  <div>
    <h2>{{msg}}</h2>
    <p>新闻ID：{{ $route.params.newsId}}</p>
    <p>新闻标题：{{ $route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  name:'orange',
  data(){
    return {
      msg:'I an params page'
    }
  }
}
</script>

<style scoped>
  h2{
    color: blue;
  }
</style>

