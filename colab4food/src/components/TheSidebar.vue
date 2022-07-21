<template>


  <v-navigation-drawer permanent color="blue" app>
    <img src="https://colab4food.com/front/img/logotipo.png" width=195 class="px-2 py-4 mx-auto d-block ">


    <v-list nav dense>

      <v-list-item link to="/home" class="">
        <v-list-item-icon icon="mdi-home" size="30" class="pl-7"></v-list-item-icon>
        <v-list-item-title style="font-size:22px" class="pl-5">Home</v-list-item-title>
      </v-list-item>




      <v-list-item link to="/organizations" class="">
        <v-list-item-icon icon="mdi-office-building" size="30" class="pl-7"></v-list-item-icon>
        <v-list-item-title style="font-size:22px" class="pl-5">organizations</v-list-item-title>
      </v-list-item>



      <v-list-item link to="/organizations" class="">
        <v-list-item-icon icon="mdi-human-greeting-proximity" size="30" class="pl-7"></v-list-item-icon>
        <v-list-item-title style="font-size:22px" class="pl-5">Contacto Processes</v-list-item-title>
      </v-list-item>


      <v-list-item link to="/organizations" class="">
        <v-list-item-icon icon="mdi-handshake-outline" size="30" class="pl-7"></v-list-item-icon>
        <v-list-item-title style="font-size:22px" class="pl-5">Opportunities</v-list-item-title>
      </v-list-item>




      <v-list-item link to="/organizations" class="">
        <v-list-item-icon icon="mdi-book-open-outline" size="30" class="pl-7"></v-list-item-icon>
        <v-list-item-title style="font-size:22px" class="pl-5">Customer Outline</v-list-item-title>
      </v-list-item>





      <v-list-item link to="/organizations" class="">
        <v-list-item-icon icon="mdi-calculator-variant-outline" size="30" class="pl-7"></v-list-item-icon>
        <v-list-item-title style="font-size:22px" class="pl-5">Calculations</v-list-item-title>
      </v-list-item>





      <v-list-item link to="/organizations" class="">
        <v-list-item-icon icon="mdi-view-dashboard-variant-outline" size="30" class="pl-7"></v-list-item-icon>
        <v-list-item-title style="font-size:22px" class="pl-5">Dashboard</v-list-item-title>
      </v-list-item>



      <v-list-item link to="/organizations" class="">
        <v-list-item-icon icon="mdi-menu" size="30" class="pl-7"></v-list-item-icon>
        <v-list-item-title style="font-size:22px" class="pl-5">Dropdown</v-list-item-title>
      </v-list-item>





      <v-list-item>
        <router-link to="/login">
          <v-btn>Go to login</v-btn>
        </router-link>
      </v-list-item>

    </v-list>

  </v-navigation-drawer>


</template>

<script setup lang="ts">

// () => ({
//   selectedItem: 0,
//   items: [
//     { text: 'My Files', icon: 'mdi-folder' },
//     { text: 'Shared with me', icon: 'mdi-account-multiple' },
//     { text: 'Starred', icon: 'mdi-star' },
//     { text: 'Recent', icon: 'mdi-history' },
//     { text: 'Offline', icon: 'mdi-check-circle' },
//     { text: 'Uploads', icon: 'mdi-upload' },
//     { text: 'Backups', icon: 'mdi-cloud-upload' },
//   ]


// })

</script>

<style scoped>
</style>