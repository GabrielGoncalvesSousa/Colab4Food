<template>

 <v-app id="app">

  <TheSidebar app></TheSidebar>
  <TheTopBar app></TheTopBar>
  <!-- <v-footer app color="purple"></v-footer> -->

  <v-main id="container1" app>
   <router-view v-slot="{ Component, route }">

    <transition name="slide" mode="out-in">
     <v-layout :full-height="true" :key="route.name">
      <component :is="Component"></component>
     </v-layout>
    </transition>
   </router-view>
  </v-main>


 </v-app>
</template>

<script setup lang="ts">
import TheSidebar from "../components/TheSidebar.vue";
import TheTopBar from "../components/TheTopBar.vue";

</script>

<style lang="css">
.slide-enter-active,
.slide-leave-active {
 transition: opacity 1s, transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
 opacity: 0;
 transform: translateX(-30%);
}

::v-deep .v-application--wrap {
 min-height: fit-content;
}

/* html {
    overflow-y: hidden !important;
} */

/* 
.scrollable {
    overflow-y: scroll !important;
} */

/* #{

} */
</style>