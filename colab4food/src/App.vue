<template>
 <router-view />

</template>

<script setup lang="ts">
import { inject, onMounted } from '@vue/runtime-dom';

import TheTopBar from './components/TheTopBar.vue';

//Simple data to test communication between components
// const axios = injectStrict(AxiosKey)
const globalData = ['lol1,lol2']


onMounted(() => {

})
</script>


<style scoped lang="scss">
/**
    Overwrite vuetify's default v-application--wrap min-height: 100vh;
    Due to the many problems with vh on mobile devices.
   */
</style>