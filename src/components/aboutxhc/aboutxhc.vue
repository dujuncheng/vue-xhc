<template>
  <div>
    <v-header></v-header>
    <know-xhc></know-xhc>
    <wefocus></wefocus>
    <team></team>
    <field></field>
  </div>
</template>

<script type="text/ecmascript-6">
  import vhead from './aboutxhc-head/aboutxhc-head.vue'
  import knowxhc from '../know_xhc/know_xhc.vue'
  import wefocus from '../wefocus/wefocus.vue'
  import team from '../team/team.vue'
  import field from '../focus_area/focus_area.vue'

  export default {
    components: {
      'v-header': vhead,
      'know-xhc': knowxhc,
      wefocus,
      team,
      field
    }
  }
</script>

<style>

</style>
