<template>

  <v-app>
    <v-main>
      <router-view :globalData="globalData" />
    </v-main>
  </v-app>

</template>

<!-- <script >
export default ({
  data() {
    return {
      globalData: ['lol1,lol2']
    }
  },

  mounted() {
    console.log(this)

    this.axios.get('http://192.168.1.82:3000/user/getAllUsers',)
      .then((response) => {
        console.log(response.data);
        this.teste = response.data
      }
      )

    console.log(this);
    console.log(this.$refs);
    console.log(this.$props);
    console.log(this.$.appContext.app.axios);
  },
})
</script>
 -->

<script setup lang="ts">
import { inject, onMounted } from '@vue/runtime-dom';
import { injectStrict } from './symbols';
import { AxiosKey } from './symbols';
import TheTopBar from './components/TheTopBar.vue';

//Simple data to test communication between components
const axios = injectStrict(AxiosKey)
const globalData = ['lol1,lol2']


onMounted(() => {


  axios.get('http://192.168.1.82:3000/user/getAllUsers')
    .then((response: any) => {
      console.log(response);
    })

})
</script>
