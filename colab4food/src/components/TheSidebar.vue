<template >
  <v-navigation-drawer permanent color="success" width="200">
    <img src="https://colab4food.com/front/img/logotipo.png" width=195 class="px-2 py-4 mx-auto d-block ">
    <v-list-item>
      <router-link to="/home">
        <span role="link">Home</span>
      </router-link>
    </v-list-item>

    <v-list-item>
      <router-link to="/organizations">
        <span role="link">Organizations</span>
      </router-link>
    </v-list-item>

    <v-list-item>
      <router-link to="/organizations">
        <span role="link">Contacto Processes</span>
      </router-link>
    </v-list-item>

    <v-list-item>
      <router-link to="/organizations">
        <span role="link">Opportunities</span>
      </router-link>
    </v-list-item>

    <v-list-item>
      <router-link to="/organizations">
        <span role="link">Customer Outline</span>
      </router-link>
    </v-list-item>

    <v-list-item>
      <router-link to="/organizations">
        <span role="link">Calculations</span>
      </router-link>
    </v-list-item>

    <v-list-item>
      <router-link to="/organizations">
        <span role="link">Dashboard</span>
      </router-link>
    </v-list-item>

    <v-list-item>
      <router-link to="/organizations">
        <span role="link">Dropdown</span>
      </router-link>
    </v-list-item>


    <v-list-item>
      <router-link to="/login">
        <v-btn>Go to login</v-btn>
      </router-link>
    </v-list-item>



  </v-navigation-drawer>
</template>

<script setup lang="ts">


</script>