<template>
  <v-container>
    <v-img src="https://colab4food.com/front/img/logotipo.png" class="mx-auto mt-4" max-width="300" />
    <v-row>
      <v-col align-self=" center">

        <v-card width="500" class="mx-auto mt-7" elevation="24" outlined="true" loading>

          <v-card-title class="text-center">
            Login
          </v-card-title>
          <v-card-text>
            <v-text-field label="Username" prepend-icon="mdi-account-circle" />
            <v-text-field label="Password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" />
          </v-card-text>

          <v-card-actions class="">
            <v-btn class="mx-auto" color="info" size="x-large">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const showPassword: boolean = false

</script>