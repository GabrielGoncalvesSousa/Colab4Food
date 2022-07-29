<template>

 <v-form>
  <v-container>
   <v-row justify="center">
    <v-dialog v-model="props.modelValue" contained persistent>
     <!--Acrescentar contained caso queira centrar no proprio conteudo mas nao fica tao bem-->
     <v-card>
      <v-card-title>
       <span class=" text-h5">Editar</span>
      </v-card-title>
      <v-card-text>
       <v-container>
        <v-row>

         <!-- Nome Organizacao -->
         <v-col cols="12" md="4">
          <v-text-field required hint="Nome da Organização" v-model="dataToDisplay.nomeOrganizacao"></v-text-field>
         </v-col>


         <v-col cols="12" md="4">
          <v-text-field hint="" v-model=dataToDisplay.nomePrioridade>

          </v-text-field>
         </v-col>

         <v-col cols="12" md="4">
          <v-text-field hint="" v-model=dataToDisplay.cidade>

          </v-text-field>
         </v-col>

         <v-col cols="12" md="4">
          <v-text-field hint="" v-model="dataToDisplay['codigo-postal']">

          </v-text-field>
         </v-col>

         <v-col cols="12" md="4">
          <v-text-field hint="" v-model="dataToDisplay.rua">

          </v-text-field>
         </v-col>

         <v-col cols="12" md="4">
          <v-text-field hint="">
           {{ dataToDisplay.nomeTipoOrganizacao }}
          </v-text-field>
         </v-col>

         <v-col cols="12" md="4">
          <v-text-field hint="">
           {{ dataToDisplay.user }}
          </v-text-field>
         </v-col>

         <v-col cols="12" md="4">
          <v-text-field hint="">
           {{ dataToDisplay.nomeDistrito }}
          </v-text-field>
         </v-col>




         <v-col cols="12">
          <v-text-field label="Email*" required></v-text-field>
         </v-col>
        </v-row>

        <v-row>
         <v-col v-for="contacto in dataToDisplay.contacto">
          <v-text-field hint="Nome Contacto">
           {{ contacto.nomeContacto }}
           <v-icon v-if="dataToDisplay.isContactoPrincipal = true">mdiAccountAlert</v-icon>
          </v-text-field>

          <v-text-field hint="Nome Contacto" v-model="contacto.nomeContacto">

          </v-text-field>

          <v-text-field hint="Nome Contacto">
           {{ contacto.nomeContacto }}
          </v-text-field>

          <v-text-field hint="Nome Contacto">
           {{ contacto.nomeContacto }}
          </v-text-field>
         </v-col>
        </v-row>
       </v-container>


       <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
       <v-spacer></v-spacer>
       <v-btn color="blue-darken-1" text @click="$emit('update:modelValue', $event.target.value)">
        Close
       </v-btn>
       <v-btn color="blue-darken-1" text @click="$emit('update:modelValue', $event.target.value)">
        Save
       </v-btn>
      </v-card-actions>
     </v-card>
    </v-dialog>
   </v-row>

   <v-row>

   </v-row>
  </v-container>
 </v-form>



</template>

<script setup lang="ts">


let props = defineProps(['modelValue', 'dataToDisplay'])
defineEmits(['update:modelValue'])
console.log(props);

console.log(props.dataToDisplay);
console.log('fui cjamado');


</script>

<style>
</style>