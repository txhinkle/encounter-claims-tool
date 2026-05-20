<script setup>
import {ref} from 'vue';
import useClaimFile from './composables/useClaimFile.js';
// import Start from '@/components/StartView.vue'
// import Member from '@/components/MemberView'
// import Provider from '@/components/ProvidersView'
// import Diagnosis from'@/components/DiagnosisView'
const {finished, template, claimObject} = useClaimFile();
// const claimStage = ref('start');
// const claimStages = {
//   'start': Start,
//   // 'member': Member,
//   // 'providers': Provider,
//   // 'diagnosis': Diagnosis,
// }

// add next/back buttons that navigate via stage order
// provider doesn't have a back, but has a button for 'start over' which whipes the record
// const claimStageNavigation = {
//   'start': {
//     back: null,
//     forward: 'providers'
//   },
// }

</script>

<template>
  <div>
    <h1>The following will produce a Select Health Professional encounter with a single service line</h1>
    <label v-for="key in Object.keys(claimObject)">
      <div>{{ key }}</div>
      <input type="text" v-model="claimObject[key]" />
    </label>
    <pre>{{ claimObject }}</pre>
    <pre v-if="finished">{{ template }}</pre>
  </div>
  
  <!-- <component :is="claimStages[claimStage]"></component>
  <div id="nav">
    <input type="button" value="Back" :disabled="!claimStageNavigation[claimStage].back" />
  </div>
  <pre>
  {{claimStageNavigation[claimStage].back}}
  </pre> -->
</template>

<style scoped>
</style>
