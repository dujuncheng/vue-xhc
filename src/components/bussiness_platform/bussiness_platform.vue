<template>
  <div>
    <navmanu></navmanu>
    <businessslider></businessslider>
    <businessField></businessField>
    <moreServer></moreServer>
    <medicalPlatform></medicalPlatform>
    <institution></institution>
  </div>
</template>

<script type="text/ecmascript-6">
  import navmanu from '../navManu/navmanu.vue'
  import businessslider from '../business_slide/business_slide.vue'
  import businessField from '../business_field/business_field.vue'
  import moreServer from '../more_server/more_server.vue'
  import medicalPlatform from '../medical_platform/medical_platform.vue'
  import institution from '../institution/institution.vue'
  export default {
    components: {
      navmanu,
      businessslider,
      businessField,
      moreServer,
      medicalPlatform,
      institution
    }
  }
</script>

<style>


</style>
