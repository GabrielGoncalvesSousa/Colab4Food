
<template>
 <v-app-bar color="white-blue" app floating shrink-on-scroll prominent scroll-target="#scrolling-techniques">
  <v-app-bar-nav-icon></v-app-bar-nav-icon>
  <v-toolbar-title>Hello Gabriel
   <v-icon>mdi-handball</v-icon>
  </v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn icon>
   <v-icon>mdi-cards-heart</v-icon>
  </v-btn>
  <v-btn icon>
   <v-icon>mdi-magnify</v-icon>
  </v-btn>
  <v-text-field hide-details single-line></v-text-field>
  <v-btn icon>
   <v-icon>mdi-dots-vertical</v-icon>
  </v-btn>
 </v-app-bar>
</template>

<script setup lang="ts">

</script>

<style  scoped>
#toolbar {
 position: sticky;
 float: right;
}
</style>