<template>
  <div class="about">
    <Header 
    :isHome=false 
    :logo= "require('@/assets/logo_upminer_.png')"/>
    <Slide/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Slide from '@/components/Slide.vue'
export default {
  components: {
    Header,
    Slide,
  }
}
</script>
<style lang="scss" scoped>
</style>