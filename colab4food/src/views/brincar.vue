<!-- 
<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field @click=validar($event) :control="name" :counter="10" :rules="nameRules" label="Name" required
      v-model="name" validate-on-blur>
    </v-text-field>

    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

    <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required>
    </v-select>

    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required>
    </v-checkbox>

    <v-btn :disabled="valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset Form
    </v-btn>

    <v-btn color="warning" @click="resetValidation">
      Reset Validation
    </v-btn>
  </v-form>
  {{ name }}

  {{ teste }}

  {{ valid }}


</template>

<script setup lang ="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue'

let context = ref({})


let name: string;
let valid: boolean = false

let nameRules = [
  v => !!v || 'Name is required',
  v => (v && v.length <= 10) || 'Name must be less than 10 characters',
]

let email: string
let emailRules = [
  v => !!v || 'E-mail is required',
  v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
],


  select: null,
  items: [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ],
  checkbox: false,

function validate() {
  context.root.$refs.form.validate()
},
function reset() {
  console.log(this.$refs);
  console.log(this.name);
  this.$refs.form.reset()
},
function resetValidation() {
  this.$refs.form.resetValidation()
}

function validar(evento) {
  console.log(evento.target);
}

onMounted(() => {
  
  axios
    .get('http://192.168.1.82:3000/user/getAllUsers',)
    .then((response) => {
      console.log(response.data);
      this.teste = response.data
    }
    )
  console.log(this.teste);
  console.log((this.$refs));
  console.log(this.$refs.form.items)
})

</script> -->
