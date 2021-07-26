<template>
  <div class="about">
    <Header 
    :isHome=false 
    :logo= "require('@/assets/logo_upminer_.png')"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header,
  }
}
</script>
<style lang="scss" scoped>
</style>