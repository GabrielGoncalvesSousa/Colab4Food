<template>
  <v-app>

    <v-main>
      <router-view :globalData="globalData" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const globalData = ['Lol1', 'Lol2'];
</script>
