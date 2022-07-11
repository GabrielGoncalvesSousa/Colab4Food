
<template>
  <v-container>
    <v-img src="https://colab4food.com/front/img/logotipo.png" class="mx-auto mt-4" max-width="300" />
    <v-row>
      <v-col align-self=" center">
        <v-form ref="form" v-model="formControl.valid" lazy-validation>
          <v-card width="500" class="mx-auto mt-7" elevation="24" outlined="true" loading>
            <v-card-title class="text-center" style="color: blue;">Login</v-card-title>
            <v-card-text>


              <v-text-field label="Username" prepend-icon="mdi-account-circle" v-model="formControl.username"
                :counter="10" :rules="formControl.usernameRules" required />


              <v-text-field label="Password" :type="formControl.showPassword ? 'text' : 'password'"
                prepend-icon="mdi-lock" v-model="formControl.password"
                :append-icon="formControl.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="formControl.showPassword = !formControl.showPassword" :rules="formControl.passwordRules"
                :counter="10" required />

            </v-card-text>

            <v-card-actions class="">
              <v-btn class="mx-auto" color="info" size="x-large">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>

    </v-row>
  </v-container>
  <!-- 
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="username" :counter="10" :rules="usernameRules" label="Name" required></v-text-field>

    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
  </v-form> -->
</template>

<script setup lang="ts">
import * as myImports from '@/imports/imports'

let formControl = myImports.ref({
  showPassword: false,
  valid: true,
  username: '',
  usernameRules: [
    (v: string) => !!v || 'Name is required',
    (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters',
  ],
  password: '',
  passwordRules: [
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters',
  ],
})


// const showPassword: boolean = false
// let formControl = {
//   valid: true,
//   username: '',
  // usernameRules: [
  //   (v: any) => !!v || 'Name is required',
  //   (v: string | any[]) => (v && v.length <= 10) || 'Name must be less than 10 characters',
  // ],
//   email: '',
//   emailRules: [
//     (v: any) => !!v || 'E-mail is required',
//     (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
//   ],
  // password: '',
  // passwordRules: [
  //   (v: any) => !!v || 'Password is required',
  //   (v: string | any[]) => (v && v.length <= 10) || 'Name must be less than 10 characters',
  // ],

// }

</script>

<style scoped>
</style>
