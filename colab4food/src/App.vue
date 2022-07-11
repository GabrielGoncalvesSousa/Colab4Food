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

import { onMounted } from '@vue/runtime-dom'
import type { AxiosStatic } from 'axios';
import { inject, getCurrentInstance, computed } from 'vue';
import imports from './imports/imports';
import { AxiosKey } from './symbols';

console.log(getCurrentInstance());

// console.log(window.)

// console.log(mm);
console.log(import.meta.env);

let globalData = ['lol1,lol2']


// namesSpaceAxios

// shims

console.log(axios)


onMounted(() => {



  imports.axios.get('http://192.168.1.82:3000/user/getAllUsers')
    .then((response: any) => {
      console.log(response);
    })

})

const tesa = computed(() => {

})
</script>
