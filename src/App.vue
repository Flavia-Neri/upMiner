<template>
  <div id="app">
     <router-view/>
  </div>
 
</template>

<script>

export default {
  components:{
  }
}
</script>

<style lang="scss">
@import "@/sass/main.scss";
body{
  padding:0;
  margin:0;

  #app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
}


</style>
