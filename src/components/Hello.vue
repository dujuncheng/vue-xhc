<template>
  <div class="hello">
    <navmanu></navmanu>
    <aboutxhc></aboutxhc>
  </div>
</template>

<script>
  import aboutxhc from './aboutxhc/aboutxhc.vue'
  import navmanu from './navManu/navmanu.vue'
  export default {
    components: {
      navmanu,
      aboutxhc
    },
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
